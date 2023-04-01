import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from 'src/business-logics/user/user.service';
import { User } from 'src/business-logics/user/entity/user.entity';
import { UserRepository } from 'src/business-logics/user/user.repository';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
