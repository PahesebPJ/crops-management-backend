import { Crops } from "src/crops/crops.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    photo_url: string;

    @OneToMany(()=>Crops, (crops)=>crops.users)
    crops: Crops[];
}