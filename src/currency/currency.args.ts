import { Field } from '@nestjs/graphql';

export class CurrencyArgs {
  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  code?: string;
}
