import mongoose from "mongoose";

export const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");
  } catch (error) {
    console.log("Not Connected", error);
  }
};
