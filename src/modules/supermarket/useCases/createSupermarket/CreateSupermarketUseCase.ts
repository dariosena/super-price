import { inject, injectable } from "tsyringe";

import { Supermarket } from "../../infra/typeorm/entities/Supermarket";
import { ISupermarketsRepository } from "../../repositories/ISupermarketsRepository";

interface IRequest {
    name: string;
    description: string;
    city: string;
}

@injectable()
class CreateSupermarketUseCase {
    constructor(
        @inject("SupermarketsRepository")
        private supermarketRepository: ISupermarketsRepository
    ) {}

    async execute({ name, description, city }: IRequest): Promise<Supermarket> {
        const supermarket = await this.supermarketRepository.create({
            name,
            description,
            city,
        });

        return supermarket;
    }
}

export { CreateSupermarketUseCase };
