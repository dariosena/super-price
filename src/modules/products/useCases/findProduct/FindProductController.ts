import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindProductUseCase } from "./FindProductUseCase";

export class FindProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { barcode } = request.params;

        const findProductUseCase = container.resolve(FindProductUseCase);

        const product = await findProductUseCase.execute({
            barcode,
        });

        return response.json(product);
    }
}
