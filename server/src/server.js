import "./database";
import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 5000;

const app = express();
const logger = morgan("dev");

app.use(logger);

app.listen(PORT, () =>
  console.log(`✅ Server is listening on http://localhost:${PORT} 🚀`)
);
