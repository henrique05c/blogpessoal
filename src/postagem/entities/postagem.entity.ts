import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_postagem'})//cria uma tabela chamada tb_postagem
export class Postagem{

    @PrimaryGeneratedColumn()//cria uma chave primária auto increment
    id: number;

    @IsNotEmpty() //verifica se o campo não está vazio
    @Column({length: 100, nullable: false})//cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn()//cria uma coluna chamada data atualização da postagem
    data: Date;
}