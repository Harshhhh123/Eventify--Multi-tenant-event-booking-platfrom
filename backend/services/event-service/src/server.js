import express from "express";
import cors from "cors";
import eventsRouter from "./routes/events.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRouter);

app.get("/health", (_, res) => {
  res.json({ status: "event-service running" });
});
app.get("/events/health/go", (_, res) => {
  res.json({
 
    status: "running",
  
  });
} );


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Event service running on port ${PORT}`);
  console.log("SQS_QUEUE_URL =", process.env.SQS_QUEUE_URL);
console.log("AWS_REGION =", process.env.AWS_REGION);

});
