import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_URI;

export const connectDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("db connected!"))
    .catch((err) => console.error("Error connecting to the database:", err));
};
