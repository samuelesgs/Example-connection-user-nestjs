import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    pk_user : number;

    @Column({default: "correo"})
    email : string;

    @Column({default: null})
    name : string;
}
