import { getRepository, Repository } from "typeorm";

import { ISupermarketsRepository } from "@modules/supermarket/repositories/ISupermarketsRepository";

import { ICreateSupermarketsDTO } from "../../dtos/ICreateSupermarketsDTO";
import { Supermarket } from "../entities/Supermarket";

export class SupermarketsReporitory implements ISupermarketsRepository {
    private repository: Repository<Supermarket>;

    constructor() {
        this.repository = getRepository(Supermarket);
    }

    async create({ name, city }: ICreateSupermarketsDTO): Promise<Supermarket> {
        const supermarket = this.repository.create({
            name,
            city,
        });

        await this.repository.save(supermarket);

        return supermarket;
    }
}
