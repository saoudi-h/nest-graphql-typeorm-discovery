import { Body, Controller, Get, Inject } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Currency } from './currency.entity';

@Controller('currency')
export class CurrencyController {
  constructor(
    @Inject('currencyService')
    private readonly currencyService: CurrencyService,
  ) {}

  @Get('all')
  async findAll() {
    return await this.currencyService.findAll();
  }

  @Get(':id')
  async findOne(id: number) {
    return await this.currencyService.findOne(id);
  }

  @Get('delete/:id')
  async remove(id: number) {
    return await this.currencyService.remove(id);
  }

  @Get('create')
  async create(@Body() createCurrencyDto: Currency) {
    return await this.currencyService.create(createCurrencyDto);
  }

  @Get('update')
  async update(@Body() updateCurrencyDto: Currency) {
    return await this.currencyService.update(updateCurrencyDto);
  }
}
