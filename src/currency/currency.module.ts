import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyService } from './currency.service';
import { CurrencyResolver } from './currency.resolver';
import { Currency } from './currency.entity'; // Assurez-vous que le chemin d'importation est correct

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  providers: [CurrencyService, CurrencyResolver],
})
export class CurrencyModule {}
