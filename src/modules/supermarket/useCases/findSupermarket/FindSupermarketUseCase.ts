import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Supermarket } from "../../infra/typeorm/entities/Supermarket";
import { ISupermarketsRepository } from "../../repositories/ISupermarketsRepository";

interface IRequest {
    name: string;
}

@injectable()
class FindSupermarketUseCase {
    constructor(
        @inject("SupermarketsRepository")
        private supermarketRepository: ISupermarketsRepository
    ) {}

    async execute({ name }: IRequest): Promise<Supermarket> {
        const supermarket = await this.supermarketRepository.find(name);

        if (!supermarket) {
            throw new AppError("Supermarket not found!", 404);
        }

        return supermarket;
    }
}

export { FindSupermarketUseCase };
