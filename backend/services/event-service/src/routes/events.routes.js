import express from "express";
import {
  DynamoDBClient
} from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  GetCommand,
  ScanCommand
} from "@aws-sdk/lib-dynamodb";
import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

const docClient = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: "ap-south-1" })
);

const sqsClient = new SQSClient({ region: "ap-south-1" });
const QUEUE_URL = process.env.SQS_QUEUE_URL;

/* GET /events — PUBLIC */
router.get("/", async (req, res) => {
  try {
    const result = await docClient.send(
      new ScanCommand({
        TableName: "Events",
        FilterExpression: "#status = :active",
        ExpressionAttributeNames: { "#status": "status" },
        ExpressionAttributeValues: { ":active": "ACTIVE" }
      })
    );
    res.json(result.Items || []);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

/* GET /events/:eventId — PUBLIC */
router.get("/:eventId", async (req, res) => {
  try {
    const result = await docClient.send(
      new GetCommand({
        TableName: "Events",
        Key: { eventId: req.params.eventId }
      })
    );

    if (!result.Item) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(result.Item);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

/* POST /events — ORGANIZER */
router.post("/", authenticate, async (req, res) => {
  if (req.user.role !== "ORGANIZER") {
    return res.status(403).json({ message: "Only organizers can create events" });
  }

  const { title, date, capacity, description } = req.body;

  if (!title || !date || !capacity) {
    return res.status(400).json({ message: "title, date, capacity required" });
  }

  const newEvent = {
    eventId: Date.now().toString(),
    title,
    description: description || "",
    date,
    capacity,
    availableSeats: capacity,
    status: "ACTIVE",
    createdBy: req.user.userId
  };

  try {
    await docClient.send(
      new PutCommand({
        TableName: "Events",
        Item: newEvent
      })
    );
    res.status(201).json(newEvent);
  } catch {
    res.status(500).json({ message: "Internal server error" });
  }
});

/* POST /events/:eventId/reserve — USER */
router.post("/:eventId/reserve", authenticate, async (req, res) => {
  if (req.user.role !== "USER") {
    return res.status(403).json({ message: "Only users can reserve seats" });
  }

  const eventId = req.params.eventId;

  try {
    await docClient.send(
      new UpdateCommand({
        TableName: "Events",
        Key: { eventId },
        UpdateExpression: "SET availableSeats = availableSeats - :one",
        ConditionExpression: "availableSeats > :zero AND #status = :active",
        ExpressionAttributeNames: { "#status": "status" },
        ExpressionAttributeValues: {
          ":one": 1,
          ":zero": 0,
          ":active": "ACTIVE"
        }
      })
    );

    // Publish SeatReserved event (same as Lambda)
    try {
      const eventResult = await docClient.send(
        new GetCommand({ TableName: "Events", Key: { eventId } })
      );

      const reservationId = `reservation-${eventId}-${req.user.userId}`;

      await sqsClient.send(
        new SendMessageCommand({
          QueueUrl: QUEUE_URL,
          MessageBody: JSON.stringify({
            eventId: reservationId,
            type: "SeatReserved",
            data: {
              reservationId,
              eventId,
              userId: req.user.userId,
              eventTitle: eventResult.Item.title,
              reservedAt: new Date().toISOString()
            }
          })
        })
      );
    } catch (err) {
      console.error("Failed to publish SeatReserved:", err);
    }

    res.json({ reserved: true });
  } catch (err) {
    if (err.name === "ConditionalCheckFailedException") {
      return res.status(409).json({ message: "Event sold out or inactive" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
