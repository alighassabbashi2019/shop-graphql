import { Args, Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { SearchService } from './search.service';
import { Product, Search, SearchResult } from './search.entity';

@Resolver((of) => Search)
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @ResolveField((returns) => [SearchResult])
  items(
    @Parent() search,
    @Info() { Search }
  ) // @Args('searchFilters') searchFilters: string
  {
    return;
    /*
     * get search results
     * or maybe user and product impelment search interface and
     * they resolve productItems & userItems
     */
  }
}
