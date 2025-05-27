import { Role } from '../models/roles';
import { Request, Response } from 'express';
import { connectDB } from '../utils/dbConection';
//script para crear roles de ejemplo 
const createRole = async ()=>{
    await connectDB();
    const roleName = new Role({
        name: 'admin',
        permissions: ['read', 'write', 'delete']
    })

    await roleName.save();
    console.log('role creado')
    return ;
}


createRole();