import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import createConnection from "@shared/infra/typeorm";
import "dotenv/config";

import "@shared/container";

import { AppError } from "../../../errors/AppError";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }
        return response.status(500).json({
            status: "error",
            message: `internal server error = ${err.message}`,
        });
        next();
    }
);

export { app };
