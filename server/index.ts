import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./mongoosedb";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
