import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//middleware para la autenticacion con json web token
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const header = req.header('Authorization');
    const secret = process.env.JWT_TOKEN as string;
    if (!header){
        return res.status(401).json({
            message: "No se ha proporcionado un token de autenticación"})
    }
    try {
        //quitar bearer del token
        const token = header.split(' ')[1];
        //verificar el token
        const payload = jwt.verify(token, secret);
        //queda pendiente saber que datos van en el payload

        next();
    } catch (error) {
        return res.status(401).json({
            message: "token no valido",
            error: error
        })
    }
}