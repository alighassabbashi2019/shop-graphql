import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Query } from '@nestjs/graphql';
import { Product } from './product.entity';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query((returns) => Product)
  getProduct() {
    return;
  }
}
