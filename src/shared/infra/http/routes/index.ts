import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { supermarketsRoutes } from "./supermarkets.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/products", productsRoutes);
router.use("/supermarkets", supermarketsRoutes);
router.use("/users", usersRoutes);

export { router };
