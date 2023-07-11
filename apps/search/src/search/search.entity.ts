import {
  Directive,
  Field,
  InterfaceType,
  ObjectType,
  createUnionType,
} from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Product {
  @Field()
  @Directive('@external')
  id: string;
}

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field()
  @Directive('@external')
  id: string;
}

export const SearchResult = createUnionType({
  name: 'SearchResult',
  types: () => [User, Product] as const,
});

@ObjectType()
export class Search {
  @Field((type) => [SearchResult])
  items: User[] | Product[];
}
