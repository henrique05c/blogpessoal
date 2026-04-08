import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //tipo de banco de dados
      host: 'localhost', //host do banco de dados
      port: 3306, //porta do banco de dados
      username: 'root', //usuário do banco de dados
      password: 'root', //senha do banco de dados
      database: 'db_blogpessoal', //nome do banco de dados
      entities: [Postagem, Tema],
      synchronize: true,
    })
    , PostagemModule
    ,TemaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
