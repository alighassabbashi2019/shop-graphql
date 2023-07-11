import { Test, TestingModule } from '@nestjs/testing';
import { UesrService } from './uesr.service';

describe('UesrService', () => {
  let service: UesrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UesrService],
    }).compile();

    service = module.get<UesrService>(UesrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
