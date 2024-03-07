import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './currency.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}

  async findAll(): Promise<Currency[]> {
    return await this.currencyRepository.find();
  }

  async findOne(id: number): Promise<Currency | null> {
    return await this.currencyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.currencyRepository.delete(id);
  }

  async create(currency: Currency): Promise<Currency> {
    return await this.currencyRepository.save(currency);
  }

  async update(currency: Currency): Promise<Currency> {
    await this.currencyRepository.update(currency.id, currency);
    return await this.currencyRepository.findOne({
      where: { id: currency.id },
    });
  }

  async delete(id: number): Promise<void> {
    await this.currencyRepository.delete(id);
  }

  async findByName(name: string): Promise<Currency | null> {
    return await this.currencyRepository
      .createQueryBuilder('currency')
      .where('currency.name = :name', { name })
      .getOne();
  }

  async createCurrency(name: string, rate: number): Promise<Currency> {
    const newCurrency = this.currencyRepository.create({ name, rate });
    return this.currencyRepository.save(newCurrency);
  }

  async getCurrencies(): Promise<Currency[]> {
    return this.currencyRepository.find();
  }
}
