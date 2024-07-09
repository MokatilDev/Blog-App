import express from "express";
import cros from "cors";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import colors from "colors"

dotenv.config()

const app = express();

app.use(cros());
app.use(express.json());
app.use(cookieParser());

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`User connected : ${socket.id}`);
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(colors.green(` - ✅ Server is running on port ${PORT}`));
});
