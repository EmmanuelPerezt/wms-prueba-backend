import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { User } from '../models/userModel';
import jwt from 'jsonwebtoken';

const registerUser = async (req: Request, res: Response) => {
    const {name, username, email, password, role } = req.body;
    if (!name || !username || !email || !password || !role) {
         res.status(400).json({
            message: 'Todos los campos son obligatorios'
        });
        return;
    }
    try {
        const user = new User({
            name,
            username,
            email,
            password: bcrypt.hashSync(password, 10),
            role
        })
        await user.save();
        res.status(201).json({
            message: 'Usuario registrado'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al registrar el usuario',
            error: error
        })
    }
}

const loginUser = async (req: Request, res: Response) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
             res.status(404).json({
                message: 'Usuario no encontrado'
            });
            return;
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
             res.status(401).json({
                message: 'Contraseña incorrecta'
            });
            return;
        }
        // firmar token
        const token = jwt.sign(
            { name: user.name, 
              email: user.email,
              role: user.role
            },
            process.env.JWT_SECRET || 'secret',
            { expiresIn: '24h' }
        )
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: token
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al iniciar sesión',
            error: error
        })
        
    }
}

export { registerUser, loginUser};