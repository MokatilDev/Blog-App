import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
import router from "./routes";

mongoose.connect("mongodb://localhost:27017/Blog_App").then(() => {
  console.log(colors.green(" - ✅ Connected with MongoDB"));
});

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(router)

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST","PUT","PATCH","DELETE"]
  }
});

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(colors.green(` - ✅ Server is running on port ${PORT}`));
});
