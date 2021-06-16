import { Router } from "express";

import { CreateSupermarketController } from "@modules/supermarket/useCases/createSupermarket/CreateSupermarketController";

const supermarketsRoutes = Router();

const createSupermarketController = new CreateSupermarketController();

supermarketsRoutes.post("/", createSupermarketController.handle);

export { supermarketsRoutes };
