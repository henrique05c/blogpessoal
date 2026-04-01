import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controller/postagem.controllers";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], //importação do módulo do TypeOrm para a entidade postagem
    providers: [PostagemService], //Define o PostagemService como um provedor
    controllers: [PostagemController], //Define o PostagemController como um controlador
    exports: [TypeOrmModule] //Exporta o TypeOrmModule
})
export class PostagemModule {}