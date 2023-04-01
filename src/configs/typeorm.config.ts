import { ConfigModule, ConfigService } from '@nestjs/config';
import { IEnvironmentConfigs } from './environments.config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export interface ITypeormEnvironments {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const typeormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService<IEnvironmentConfigs>) => {
    const database = config.getOrThrow<ITypeormEnvironments>('database');

    return {
      type: 'mysql',
      host: database.host,
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.database,
      entities: ['src/entities/**/*.ts'],
      subscribers: ['src/subscribers/**/*.ts'],
      synchronize: true,
    };
  },
};

export default typeormConfig;
