import { inject, injectable } from "tsyringe";

import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

interface IRequest {
    barcode: string;
}

@injectable()
class FindProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productRepository: IProductsRepository
    ) {}

    async execute({ barcode }: IRequest): Promise<Product> {
        const product = await this.productRepository.findProduct(barcode);

        return product;
    }
}

export { FindProductUseCase };
