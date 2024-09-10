import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  getProducts() {
    return 'Estos son los productos:  product1, product2, product3...';
  }
}