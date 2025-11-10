import mongoose from "mongoose";
 const connectDB = async () => {
    const url = process.env.DB_URL;
    if (!url) throw new Error("MONGODB_URI not fount in .env");
    try {
        await mongoose.connect(url);
        console.log("✅ MongoDB connected via Mongoose");
    } catch (error) {
         console.error("❌ MongoDB connection failed:", err.message);
         process.exit(1);
    }
 }
export default connectDB;