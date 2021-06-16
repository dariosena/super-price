import { inject, injectable } from "tsyringe";

import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

import { AppError } from "../../../../errors/AppError";

interface IRequest {
    name: string;
    price: number;
    barcode: string;
}

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductsRepository")
        private productRepository: IProductsRepository
    ) {}

    async execute({ name, price, barcode }: IRequest): Promise<Product> {
        const productAlreadyExists = await this.productRepository.findProduct(
            barcode
        );
        if (productAlreadyExists) {
            throw new AppError("Product already exists!", 400);
        }

        const product = await this.productRepository.create({
            name,
            price,
            barcode,
        });

        return product;
    }
}

export { CreateProductUseCase };
