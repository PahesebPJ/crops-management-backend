import { Users } from "src/users/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"

@Entity()
export class Crops {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;
    
    @Column()
    watering_frecuence: number;

    @Column()
    watering_time: number;

    @Column()
    photo_url: string;

    @ManyToOne(()=>Users, (users)=>users.crops)
    users:Users
}