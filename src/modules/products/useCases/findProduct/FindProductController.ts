import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindProductUseCase } from "./FindProductUseCase";

export class findProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { barcode } = request.body;

        const findProductUseCase = container.resolve(FindProductUseCase);

        const product = await findProductUseCase.execute({
            barcode,
        });

        return response.status(201).json(product);
    }
}
