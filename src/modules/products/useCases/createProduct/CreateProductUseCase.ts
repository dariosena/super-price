import { inject, injectable } from 'tsyringe';

import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<Product> {
    const product = await this.productRepository.create({
      name,
      description,
    });

    return product;
  }
}

export { CreateProductUseCase };
