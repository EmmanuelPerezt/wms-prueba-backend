import { User } from "../models/userModel";
import bcrypt from "bcryptjs";
import { connectDB } from "../utils/dbConection";
const password = "122342"

const createUser = async () => {
    await connectDB()
    const user = new User({
        name: 'jhon',
        username: 'jhon123',
        email: 'exampl@example.com',
        password: bcrypt.hashSync(password, 10),
        role: '6834ba18ed5379a596b1b4ba',
    })
    await user.save();
    console.log('creado el usuario')
}


createUser();