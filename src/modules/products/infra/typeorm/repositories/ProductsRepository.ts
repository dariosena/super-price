import { getRepository, Repository } from "typeorm";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../entities/Product";

export class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async create({
        name,
        price,
        barcode,
    }: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            name,
            price,
            barcode,
        });

        await this.repository.save(product);

        return product;
    }

    async findProduct(barcode: string): Promise<Product> {
        const product = this.repository.findOne({ barcode });

        return product;
    }
}
