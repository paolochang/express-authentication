import express from "express";
import authorization from "../middleware/authorization";
import * as auth from "../controller/auth";

const authRouter = express.Router();

authRouter.post("/register", auth.register);
authRouter.post("/login", auth.login);
authRouter.get("/check", authorization, auth.check);
authRouter.post("/logout", authorization, auth.logout);

const userRouter = express.Router();

userRouter.get("/", auth.read);
userRouter.patch("/", auth.update);
userRouter.delete("/", authorization, auth.remove);

authRouter.use("/:id", userRouter);

export default authRouter;
