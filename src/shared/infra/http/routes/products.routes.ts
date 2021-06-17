import { Router } from "express";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { FindProductController } from "@modules/products/useCases/findProduct/FindProductController";

import { ensureAuthenticated } from "../../../../middlewares/EnsureAuthenticated";

const productsRoutes = Router();

const createProductsController = new CreateProductController();
const findProductsController = new FindProductController();

productsRoutes.use(ensureAuthenticated);
productsRoutes.get("/:barcode", findProductsController.handle);
productsRoutes.post("/", createProductsController.handle);

export { productsRoutes };
