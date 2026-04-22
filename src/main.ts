import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setDescription('Projeto do Blog Pessoal')
    .setContact('Henrique', '', 'henrique05022007@gmail.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'; //configguração de fuso horaário

  app.useGlobalPipes(new ValidationPipe()); //configuralçao de vakudação de dados de entrada

  app.enableCors(); //configuração de cors  para permitir requisilções de outras origens
  
  await app.listen(process.env.PORT ?? 4000); //execução da aplicação nest, configuração da porta
}
bootstrap();
