import { getRepository, Repository } from 'typeorm';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { Product } from '../entities/Product';

import { ICreateProductDTO } from '../../dtos/ICreateProductDTO';

export class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ name, description }: ICreateProductDTO): Promise<Product> {
    const car = this.repository.create({
      name,
      description,
    });

    await this.repository.save(car);

    return car;
  }
}
