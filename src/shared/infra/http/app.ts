import cors from "cors";
import express from "express";

import createConnection from "@shared/infra/typeorm";
import "dotenv/config";

import "@shared/container";

import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

export { app };
