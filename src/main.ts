import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  console.log(configService);
  const port = configService.get('PORT');

  console.log(port);
  await app.listen(port);
}
bootstrap();