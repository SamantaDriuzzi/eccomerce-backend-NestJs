import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  getAuth() {
    return 'Estos son los usuarios atenticados:  1, 2, 3';
  }
}