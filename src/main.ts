import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.on('SIGINT', async () => {
    console.log('SIGINT received: closing app...');
    await app.close();
    setTimeout(() => process.exit(0), 100);
  });

  process.on('SIGTERM', async () => {
    console.log('SIGTERM received: closing app...');
    await app.close();
    setTimeout(() => process.exit(0), 100);
  });

  process.on('SIGTERM', async () => {
    console.log('SIGTERM received: closing app...');
    await app.close();
    process.exit(0);
  });

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
