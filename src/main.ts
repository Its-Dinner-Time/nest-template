import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IEnvironments } from './configs/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<IEnvironments>);
  const PORT = configService.getOrThrow('port');

  await app.listen(PORT);
}
bootstrap();
