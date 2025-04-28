import mongoose from "mongoose";


const connectDB = async () => {

    try {
        mongoose.connect('mongodb://127.0.0.1:27017/test')

    } catch (error) {
        console.log("Error connecting to MongoDB", error);
    }
}
export {connectDB}