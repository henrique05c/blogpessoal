import { Injectable } from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>//injeção de dependência do repositório postagem
    ){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); // select * from tb_postagem;
    }

}