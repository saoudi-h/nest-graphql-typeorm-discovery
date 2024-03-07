import { Field } from '@nestjs/graphql';

export class CurrencyArgs {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  code?: string;
}
