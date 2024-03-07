import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType() // Décorateur GraphQL pour définir un type d'objet
@Entity() // Décorateur TypeORM pour définir une entité
export class Currency {
  @Field(() => ID) // Décorateur GraphQL pour exposer ce champ dans le schéma GraphQL
  @PrimaryGeneratedColumn() // Décorateur TypeORM pour une colonne d'ID auto-générée
  id: number;

  @Field() // Décorateur GraphQL pour exposer ce champ
  @Column() // Décorateur TypeORM pour une colonne standard
  name: string;

  @Field(() => Float) // Indique à GraphQL que ce champ est un Float
  @Column('float') // Type de colonne spécifique pour TypeORM
  rate: number;
}
