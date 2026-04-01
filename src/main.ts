import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  process.env.TZ = '-03:00'; //configguração de fuso horaário

  app.useGlobalPipes(new ValidationPipe()); //configuralçao de vakudação de dados de entrada

  app.enableCors(); //configuração de cors  para permitir requisilções de outras origens
  
  await app.listen(process.env.PORT ?? 4000); //execução da aplicação nest, configuração da porta
}
bootstrap();
