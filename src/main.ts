import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //quita lo que no esta en paylaod
      forbidNonWhitelisted: true, //alerta en vez de ignorar
    }),
  );
  await app.listen(3000);
}
bootstrap();
