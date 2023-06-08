import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { json } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({limit : '100mb'}))
  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    defaultVersion:'1',
    type: VersioningType.URI
  })

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentation api nestjs curso')
    .setDescription('api de curso nestJS')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Documentation', app, document);
  await app.listen(3000);
}
bootstrap();
