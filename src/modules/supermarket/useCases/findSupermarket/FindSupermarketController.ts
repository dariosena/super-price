import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindSupermarketUseCase } from "./FindSupermarketUseCase";

export class FindSupermarketController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.params;

        const findSupermarketUseCase = container.resolve(
            FindSupermarketUseCase
        );

        const supermarket = await findSupermarketUseCase.execute({
            name,
        });

        return response.json(supermarket);
    }
}
