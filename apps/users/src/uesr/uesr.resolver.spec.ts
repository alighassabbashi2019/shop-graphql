import { Test, TestingModule } from '@nestjs/testing';
import { UesrResolver } from './uesr.resolver';
import { UesrService } from './uesr.service';

describe('UesrResolver', () => {
  let resolver: UesrResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UesrResolver, UesrService],
    }).compile();

    resolver = module.get<UesrResolver>(UesrResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
