import { container } from "tsyringe";

import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { SupermarketsRepository } from "@modules/supermarket/infra/typeorm/repositories/SupermarketsRepository";
import { ISupermarketsRepository } from "@modules/supermarket/repositories/ISupermarketsRepository";

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
);

container.registerSingleton<ISupermarketsRepository>(
    "SupermarketsRepository",
    SupermarketsRepository
);
