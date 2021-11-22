import express from "express";
import authorization from "../middleware/authorization";
import * as authCtrl from "./auth.ctrl";

const authRouter = express.Router();

authRouter.post("/register", authCtrl.register);
authRouter.post("/login", authCtrl.login);
authRouter.get("/check", authorization, authCtrl.check);
authRouter.post("/logout", authorization, authCtrl.logout);

const userRouter = express.Router();

userRouter.get("/", authCtrl.read);
userRouter.patch("/", authCtrl.update);
userRouter.delete("/", authorization, authCtrl.remove);

authRouter.use("/:id", userRouter);

export default authRouter;
