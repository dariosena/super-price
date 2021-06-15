import { Router } from "express";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";

const productsRoutes = Router();
const createProductsController = new CreateProductController();

productsRoutes.post("/", createProductsController.handle);

export { productsRoutes };
