import { Router } from "express";

import { CreateSupermarketController } from "@modules/supermarket/useCases/createSupermarket/CreateSupermarketController";
import { FindSupermarketController } from "@modules/supermarket/useCases/findSupermarket/FindSupermarketController";

import { ensureAuthenticated } from "../../../../../middlewares/EnsureAuthenticated";

const supermarketsRoutes = Router();

const createSupermarketController = new CreateSupermarketController();
const findSupermarketController = new FindSupermarketController();

supermarketsRoutes.use(ensureAuthenticated);
supermarketsRoutes.get("/:name", findSupermarketController.handle);
supermarketsRoutes.post("/", createSupermarketController.handle);

export { supermarketsRoutes };
