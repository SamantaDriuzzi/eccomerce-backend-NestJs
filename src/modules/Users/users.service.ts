import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getUsers(){
    return 'Estos son los usuarios:  1, 2, 3';
  }
}