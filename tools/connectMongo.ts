import mongoose, { Mongoose } from "mongoose";

const connectToMongoDb = async (): Promise<Mongoose> => {
  const DB_URL = process.env.DB_URL;
  try {
    return await mongoose.connect(DB_URL, {});
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to MongoDB");
  }
};

export default connectToMongoDb;
