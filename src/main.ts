import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe);

  if (process.env.MODE !== 'DEV') {
    await app.listen(process.env.PORT || 5000);
  }
}
bootstrap();
