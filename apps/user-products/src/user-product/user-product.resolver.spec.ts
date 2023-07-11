import { Test, TestingModule } from '@nestjs/testing';
import { UserProductResolver } from './user-product.resolver';
import { UserProductService } from './user-product.service';

describe('UserProductResolver', () => {
  let resolver: UserProductResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProductResolver, UserProductService],
    }).compile();

    resolver = module.get<UserProductResolver>(UserProductResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
