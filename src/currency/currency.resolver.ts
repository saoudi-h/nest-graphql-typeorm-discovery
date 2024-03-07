import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { CurrencyService } from './currency.service';
import { Currency } from './currency.entity';

@Resolver(() => Currency)
export class CurrencyResolver {
  constructor(private currencyService: CurrencyService) {}

  @Query(() => [Currency])
  async currencies() {
    return this.currencyService.getCurrencies();
  }

  @Mutation(() => Currency)
  async createCurrency(
    @Args('name') name: string,
    @Args('rate', { type: () => Float }) rate: number,
  ): Promise<Currency> {
    return this.currencyService.createCurrency(name, rate);
  }
}
