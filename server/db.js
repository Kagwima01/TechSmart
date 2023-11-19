//Connection to database
import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
export default connectToDatabase;
