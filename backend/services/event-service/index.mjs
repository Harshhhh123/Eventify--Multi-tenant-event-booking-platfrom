import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  UpdateCommand,
  GetCommand,
  ScanCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  console.log("EVENT:", JSON.stringify(event));

  const method = event.httpMethod;
  const resource = event.resource; // templated
  const path = event.path;         // actual
  
  /* ----------------------------------
   GET /events
   List all ACTIVE events
---------------------------------- */
if (method === "GET" && resource === "/events") {
  try {
    const result = await docClient.send(
      new ScanCommand({
        TableName: "Events",
        FilterExpression: "#status = :active",
        ExpressionAttributeNames: {
          "#status": "status"
        },
        ExpressionAttributeValues: {
          ":active": "ACTIVE"
        }
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items || [])
    };

  } catch (err) {
    console.error("LIST EVENTS ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" })
    };
  }
}


  /* ----------------------------------
     POST /events/{eventId}/reserve   resrve bookinh
  ---------------------------------- */
  if (method === "POST" && resource === "/events/{eventId}/reserve") {
    const eventId = event.pathParameters?.eventId;

    try {
      await docClient.send(
        new UpdateCommand({
          TableName: "Events",
          Key: { eventId },
          UpdateExpression: "SET availableSeats = availableSeats - :one",
          ConditionExpression: "availableSeats > :zero AND #status = :active",
          ExpressionAttributeValues: {
            ":one": 1,
            ":zero": 0,
            ":active": "ACTIVE"
          },
          ExpressionAttributeNames: {
            "#status": "status"
          }
        })
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ reserved: true })
      };

    } catch (err) {
      if (err.name === "ConditionalCheckFailedException") {
        return {
          statusCode: 409,
          body: JSON.stringify({
            message: "Event sold out or is inactive"
          })
        };
      }

      console.error("RESERVE ERROR:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" })
      };
    }
  }

   // -------------------------------
    // GET EVENT
    // GET /events/{eventId} fetch event from dynamodb
    // -------------------------------
    if (method === "GET" && resource === "/events/{eventId}") {
      const eventId = event.pathParameters.eventId;

      const result = await docClient.send(
        new GetCommand({
          TableName: "Events",
          Key: { eventId }
        })
      );

      if (!result.Item) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: "Event not found" })
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(result.Item)
      };
    }



  /* ----------------------------------
     POST /events create of event 
  ---------------------------------- */
  if (method === "POST" && resource === "/events") {
    try {
      const body = JSON.parse(event.body || "{}");

      if (!body.title || !body.date || !body.capacity) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: "title, date, capacity required"
          })
        };
      }

      const newEvent = {
        eventId: Date.now().toString(),
        title: body.title,
        description: body.description || "",
        date: body.date,
        capacity: body.capacity,
        availableSeats: body.capacity,
        status: "ACTIVE"
      };

      await docClient.send(
        new PutCommand({
          TableName: "Events",
          Item: newEvent
        })
      );

      return {
        statusCode: 201,
        body: JSON.stringify(newEvent)
      };

    } catch (err) {
      console.error("CREATE EVENT ERROR:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" })
      };
    }
  }

  /* ----------------------------------
     FALLBACK
  ---------------------------------- */
  return {
    statusCode: 404,
    body: JSON.stringify({ message: "Route not found" })
  };
};
