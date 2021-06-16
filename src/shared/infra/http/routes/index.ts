import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { supermarketsRoutes } from "./supermarkets.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/supermarkets", supermarketsRoutes);

export { router };
