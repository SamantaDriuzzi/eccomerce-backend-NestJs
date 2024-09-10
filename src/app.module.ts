import { Module } from '@nestjs/common';
import { UserModule } from './modules/Users/user.module';
import { AuthModule } from './modules/Auth/auth.module';
import { ProductsModule } from './modules/Products/product.modules';

@Module({
  imports: [UserModule, AuthModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
