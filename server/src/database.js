require("dotenv").config();
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

const openHandler = () => console.log("✅ Connected to DB");
const errorHandler = (error) => console.log("❌ DB ERR:", error);

db.on("error", errorHandler);
db.once("open", openHandler);
