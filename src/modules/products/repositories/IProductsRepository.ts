import { ICreateProductDTO } from "../infra/dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<Product>;

    findProduct(barcode: string): Promise<Product>;
}
export { IProductsRepository };
