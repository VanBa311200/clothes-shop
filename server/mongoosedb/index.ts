import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.onzsn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    );

    console.log("MongoDB Connected");
  } catch (e: any) {
    console.log(e.message);
    process.exit(1);
  }
};

export default connectDB;
