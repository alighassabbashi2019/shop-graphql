import { Module } from '@nestjs/common';
import { UserProductService } from './user-product.service';
import { UserProductResolver } from './user-product.resolver';

@Module({
  providers: [UserProductResolver, UserProductService],
})
export class UserProductModule {}
