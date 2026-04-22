import { IsNotEmpty} from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_postagem'})//cria uma tabela chamada tb_postagem
export class Postagem{

    @ApiProperty()
    @PrimaryGeneratedColumn()//cria uma chave primária auto increment
    id!: number;

    @ApiProperty()
    @IsNotEmpty() //verifica se o campo não está vazio
    @Column({length: 100, nullable: false})//cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
    titulo!: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto!: string;

    @ApiProperty()
    @UpdateDateColumn()//cria uma coluna chamada data atualização da postagem
    data!: Date;

    @ApiProperty({ type: () => Tema })
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema!: Tema;

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario!: Usuario
}