import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateProductsSupermarkets1623800606435
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products_supermarkets",
                columns: [
                    {
                        name: "product_id",
                        type: "uuid",
                    },
                    {
                        name: "supermarket_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "products_supermarkets",
            new TableForeignKey({
                name: "FKSuperMarketProduct",
                referencedTableName: "supermarkets",
                referencedColumnNames: ["id"],
                columnNames: ["supermarket_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        await queryRunner.createForeignKey(
            "products_supermarkets",
            new TableForeignKey({
                name: "FKProductSupermarket",
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                columnNames: ["product_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "products_supermarkets",
            "FKProductSupermarket"
        );

        await queryRunner.dropForeignKey(
            "products_supermarkets",
            "FKSupermarketProduct"
        );

        await queryRunner.dropTable("products_supermarkets");
    }
}
