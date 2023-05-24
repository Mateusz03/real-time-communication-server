// main settings
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";

export const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
import { router as message } from "./routes/message.route";
import { router as nick } from "./routes/nick.route";
import { router as invite } from "./routes/invite.route";
import { router as uuid } from "./routes/uuid.route";

app.use("/uuid", uuid);
app.use("/message", message);
app.use("/nick", nick);
app.use("/invite", invite);
