import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(product);
  }
}
