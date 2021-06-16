import { Router } from "express";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { FindProductController } from "@modules/products/useCases/findProduct/FindProductController";

const productsRoutes = Router();

const createProductsController = new CreateProductController();
const findProductsController = new FindProductController();

productsRoutes.get("/:barcode", findProductsController.handle);
productsRoutes.post("/", createProductsController.handle);

export { productsRoutes };
