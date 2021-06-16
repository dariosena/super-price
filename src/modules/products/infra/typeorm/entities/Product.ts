import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Supermarket } from "@modules/supermarket/infra/typeorm/entities/Supermarket";

@Entity("products")
export class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    barcode: string;

    @Column()
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Supermarket)
    @JoinTable({
        name: "products_supermarkets",
        joinColumns: [{ name: "product_id" }],
        inverseJoinColumns: [{ name: "supermarket_id" }],
    })
    supermarkets: Supermarket[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
