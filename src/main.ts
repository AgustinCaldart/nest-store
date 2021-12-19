import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //quita lo que no esta en paylaod
      forbidNonWhitelisted: true, //alerta en vez de ignorar
      transformOptions: {
        enableImplicitConversion: true, //Lo que viene por query params transforma implicita
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('NEST STORE')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
