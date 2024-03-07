import { Resolver, Query, Mutation, Args, Float } from '@nestjs/graphql';
import { CurrencyService } from './currency.service';
import { Currency } from './currency.entity';

@Resolver((of) => Currency)
export class CurrencyResolver {
  constructor(private currencyService: CurrencyService) {}

  @Query((returns) => [Currency])
  async currencies() {
    return this.currencyService.getCurrencies();
  }

  @Mutation((returns) => Currency)
  async createCurrency(
    @Args('name') name: string,
    @Args('rate', { type: () => Float }) rate: number,
  ): Promise<Currency> {
    return this.currencyService.createCurrency(name, rate);
  }
}
