import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mainRoutes from "./routes/mainRoute.js";

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["POST"],
  allowedHeaders: ["Content-Type", "X-Requested-With"],
  credentials: true,
  maxAge: 600,
};

app.use(cors(corsOptions));

app.use("/api", mainRoutes);

export default app;
