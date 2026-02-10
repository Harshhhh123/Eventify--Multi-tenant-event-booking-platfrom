import express from "express";
import bcrypt from "bcryptjs";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";
import dotenv from "dotenv";
import { authenticate } from "./middleware/auth.js";
dotenv.config();
import cors from "cors";

import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

const client = new DynamoDBClient({ region: "ap-south-1" });
const docClient = DynamoDBDocumentClient.from(client);
console.log("JWT_SECRET:", process.env.JWT_SECRET);

/* -----------------------------
   HEALTH CHECK
----------------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "auth-service running on port 4000 okk" });
});

/* -----------------------------
   request organizer role
----------------------------- */
app.post("/request-organizer", authenticate, async (req, res) => {
  try {
    const userId = req.user.userId;

    await docClient.send(
      new UpdateCommand({
        TableName: "Users",
        Key: { userId },
        UpdateExpression: "SET #role = :org",
        ExpressionAttributeNames: {
          "#role": "role"
        },
        ExpressionAttributeValues: {
          ":org": "ORGANIZER"
        }
      })
    );

    return res.json({
      message: "Upgraded to organizer successfully"
    });

  } catch (err) {
    console.error("ORGANIZER REQUEST ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


/* -----------------------------
   REGISTER USER
----------------------------- */
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password required yaar"
      });
    }

    // 1️⃣ check if email already exists
    const existingUser = await docClient.send(
      new ScanCommand({
        TableName: "Users",
        FilterExpression: "email = :email",
        ExpressionAttributeValues: {
          ":email": email
        }
      })
    );

    if (existingUser.Items.length > 0) {
      return res.status(409).json({
        message: "User  exists in database "
      });
    }

    // 2️⃣ hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // 3️⃣ create user
    const user = {
      userId: crypto.randomUUID(),
      email,
      passwordHash,
      role: "USER",
      createdAt: new Date().toISOString()
    };

    await docClient.send(
      new PutCommand({
        TableName: "Users",
        Item: user
      })
    );

    return res.status(201).json({
      message: "User registered successfully"
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});


/* -----------------------------
   LOGIN USER
----------------------------- */


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email and password required"
      });
    }

    // 1️⃣ find user
    const result = await docClient.send(
      new ScanCommand({
        TableName: "Users",
        FilterExpression: "email = :email",
        ExpressionAttributeValues: {
          ":email": email
        }
      })
    );

    if (result.Items.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const user = result.Items[0];

    // 2️⃣ compare password
    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }
console.log("LOGIN USER:", {
  userId: user.userId,
  email: user.email,
  role: user.role
});
    // 3️⃣ create JWT
    const token = jwt.sign(
      {
        userId: user.userId,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    return res.status(200).json({
      token
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
});


/* -----------------------------
   SERVER
----------------------------- */
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Auth service running on port here now lesgssgo cicd ${PORT}`);
});
