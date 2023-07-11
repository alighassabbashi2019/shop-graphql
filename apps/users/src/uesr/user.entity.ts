import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Product {
  @Field()
  @Directive('@external')
  id: string;

  @Field((type) => [String])
  @Directive('@external')
  userItemIds: string[];

  @Field((type) => [User])
  @Directive('@requires(fields: "userItemIds")')
  userItems: User[];
}

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: string;

  @Field()
  name: string;
}
