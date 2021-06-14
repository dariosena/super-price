import { Router } from 'express';

import { CreateProductsController } from '@modules/products/useCases/createProduct/CreateProductsController';

const productsRoutes = Router();

const createProductsController = new CreateProductsController();

productsRoutes.post('/', createProductsController.handle);

export { productsRoutes };
