import { ICreateSupermarketsDTO } from "../infra/dtos/ICreateSupermarketsDTO";
import { Supermarket } from "../infra/typeorm/entities/Supermarket";

interface ISupermarketsRepository {
    create(data: ICreateSupermarketsDTO): Promise<Supermarket>;
}

export { ISupermarketsRepository };
