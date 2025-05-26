import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authContoller";



const authRouter = Router();

authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)
