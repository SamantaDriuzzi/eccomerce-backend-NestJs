import { Module, Controller } from '@nestjs/common';
import { UsersService } from "./users.service";
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule { }