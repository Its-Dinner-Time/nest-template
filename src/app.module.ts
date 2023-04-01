import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import environments from './configs/environments.config';
import typeormConfig from './configs/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      load: [environments], //
    }),
    TypeOrmModule.forRootAsync(typeormConfig),
  ],
})
export class AppModule {}
