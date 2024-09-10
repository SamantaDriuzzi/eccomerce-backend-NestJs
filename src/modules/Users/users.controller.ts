import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller('users') // esto define que será '/users'
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUSers() {
    return this.usersService.getUsers();
  }
}