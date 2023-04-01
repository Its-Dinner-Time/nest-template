import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';

import environments from './configs/environments.config';
import typeormConfig from './configs/typeorm.config';
import routes, { RouteModules } from './routers';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      load: [environments], //
    }),
    TypeOrmModule.forRootAsync(typeormConfig),
    RouterModule.register(routes),
    ...RouteModules,
  ],
})
export class AppModule {}
