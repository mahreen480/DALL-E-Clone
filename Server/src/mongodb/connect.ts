import mongoose from "mongoose";

const connectDB = async (url: string)=> {
  try {
    mongoose.set('strictQuery', true); // Correct case for the option
    await mongoose.connect(url)
    .then(()=>console.log("MongoDB Connected"));
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDB;
