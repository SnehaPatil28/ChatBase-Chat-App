import express from "express";
import dotenv from "dotenv";

import { connect_db } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();



const app = express();

const PORT = process.env.PORT;

app.use(express.json())

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Backend Running on 5001");
  connect_db();
});
