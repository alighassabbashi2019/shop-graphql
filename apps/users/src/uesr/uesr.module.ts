import { Module } from '@nestjs/common';
import { UesrService } from './uesr.service';
import { UesrResolver } from './uesr.resolver';

@Module({
  providers: [UesrResolver, UesrService],
})
export class UesrModule {}
