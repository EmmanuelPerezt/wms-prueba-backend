import mongoose from "mongoose";


const connectDB = async () => {

    try {
        mongoose.connect('mongodb://localhost:27017/test')


    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}
export {connectDB}