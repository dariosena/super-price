import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSupermarketUseCase } from "./CreateSupermarketUseCase";

export class CreateSupermarketController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description, city } = request.body;

        const createSupermarketUseCase = container.resolve(
            CreateSupermarketUseCase
        );

        const supermarket = await createSupermarketUseCase.execute({
            name,
            description,
            city,
        });

        return response.status(201).json(supermarket);
    }
}
