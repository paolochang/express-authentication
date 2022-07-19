import express from "express";
import authRouter from "./auth";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRouter);

export default apiRoutes;
