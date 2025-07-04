import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import "dotenv/config.js";

import connectDB from "../config/mongodb.js";
import connectCloudinary from "../config/cloudinary.js";

import userRouter from "../routes/userRoute.js";
import productRouter from "../routes/productRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoutes.js";

const app = express();
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Default route
app.get("/", (req, res) => {
  res.send("API is live on Vercel");
});

export default app;
export const handler = serverless(app);
