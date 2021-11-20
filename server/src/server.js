require("dotenv").config();
import "./database";
import "./models/User";
import express from "express";
import morgan from "morgan";
import authRouter from "./api";

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("dev");

app.use(express.json());
app.use(logger);

app.use("/api/auth", authRouter);

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
