import { Query, Resolver } from '@nestjs/graphql';
import { UesrService } from './uesr.service';
import { User } from './user.entity';

@Resolver((of) => User)
export class UesrResolver {
  constructor(private readonly uesrService: UesrService) {}

  @Query((returns) => User)
  getUser() {
    return;
  }
}
