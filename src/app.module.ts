import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import environments from './configs/environments.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      load: [environments], //
    }),
  ],
})
export class AppModule {}
