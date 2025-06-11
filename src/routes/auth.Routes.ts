import { Router } from "express";
import { registerUser, loginUser, verifyToken } from "../controllers/authController";



const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post('/:id', verifyToken);




export { authRouter }
