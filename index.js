import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/usersRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB Server..."))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

app.listen(5000, () => {
  console.log("Backend server is running & listening on port 5000");
});
