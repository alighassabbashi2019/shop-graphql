import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('key(fields: "id")')
export class User {
  @Field()
  @Directive('@external')
  id: string;

  @Field()
  @Directive('@external')
  prodcutItemIds: string[];
}
@ObjectType()
@Directive('@extends')
@Directive('key(fields: "id")')
export class Product {
  @Field()
  @Directive('@external')
  id: string;

  @Field()
  @Directive('@external')
  userItemIds: string[];
}

@ObjectType()
export class UserProduct {
  @Field()
  id: string;

  @Field()
  porductId: string;

  @Field()
  userId: string;
}
