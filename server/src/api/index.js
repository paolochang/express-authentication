import express from "express";
import * as authCtrl from "./auth.ctrl";

const authRouter = express.Router();

authRouter.post("/register", authCtrl.register);
authRouter.post("/login", authCtrl.login);
authRouter.get("/check", authCtrl.check);
authRouter.post("/logout", authCtrl.logout);

const userRouter = express.Router();

userRouter.get("/", authCtrl.read);
userRouter.patch("/", authCtrl.update);
userRouter.delete("/", authCtrl.remove);

authRouter.use("/:id", userRouter);

export default authRouter;
