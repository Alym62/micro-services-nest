import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
