import { Query, Resolver } from '@nestjs/graphql';
import { UserProductService } from './user-product.service';
import { UserProduct } from './user-product.entity';

@Resolver((of) => UserProduct)
export class UserProductResolver {
  constructor(private readonly userProductService: UserProductService) {}

  @Query((returns) => UserProduct)
  getUserProduct() {
    return;
  }
}
