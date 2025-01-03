import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./mongodb/connect";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "500mb" }));

// Route
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello from DALL-E");
});

// Start Server
const startServer = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
