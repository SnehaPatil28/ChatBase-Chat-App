import express from "express";
import { login, logout, signin } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/signup", signin);

route.get("/login", login);

route.get("/logout", logout);

export default route;
