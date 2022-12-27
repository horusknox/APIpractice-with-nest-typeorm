import {Column,Entity,PrimaryGeneratedColumn} from 'typeorm';


@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    createdAt:Date;

    @Column({nullable:true})
    authStrategy:string;

    // @Column({
    //     array: true,
    //     default: [],
    //     nullable: false,
    //   })
    //   roles: string;
}