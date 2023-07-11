import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field()
  @Directive('@external')
  id: string;

  @Field((type) => [String])
  @Directive('@external')
  productItemIds: string[];

  @Field((type) => [Product])
  @Directive('@requires(fields: "productItemIds")')
  productItems: Product[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class Product {
  @Field()
  id: string;

  @Field()
  title: string;
}
