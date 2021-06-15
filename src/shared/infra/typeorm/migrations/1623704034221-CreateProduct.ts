import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1623704034221 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "codebar",
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "numeric",
                    },
                    {
                        name: "supermarket_id",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKSupermarketProduct",
                        referencedTableName: "supermarkets",
                        referencedColumnNames: ["id"],
                        columnNames: ["supermarket_id"],
                        onDelete: "SET_NULL",
                    },
                ],
            })
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }
}
