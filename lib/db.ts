import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("mongoodb already connected");
    return isConnected;
  }
  try {
    const response = await mongoose.connect(process.env.MONGOOSEURI!);
    isConnected = response.connection;
    console.log("db connected!!!");
    return isConnected;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default connectDB;
