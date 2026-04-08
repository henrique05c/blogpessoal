import { IsNotEmpty} from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: 'tb_postagem'})//cria uma tabela chamada tb_postagem
export class Postagem{

    @PrimaryGeneratedColumn()//cria uma chave primária auto increment
    id!: number;

    @IsNotEmpty() //verifica se o campo não está vazio
    @Column({length: 100, nullable: false})//cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
    titulo!: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto!: string;

    @UpdateDateColumn()//cria uma coluna chamada data atualização da postagem
    data!: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema!: Tema;
}