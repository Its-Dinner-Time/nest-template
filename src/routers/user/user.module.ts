import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/services/user/entity/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from 'src/services/user/entity/user.repository';
import { ReadUserService } from 'src/services/user/read-user.service';
import { WriteUserService } from 'src/services/user/write-user.service';
// import { QueryUserResolver } from './resolvers/query-user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserRepository, //
    ReadUserService,
    WriteUserService,
    // QueryUserResolver,
  ],
  controllers: [UserController],
})
export class UserModule {}
