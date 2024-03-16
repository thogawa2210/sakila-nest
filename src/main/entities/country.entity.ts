import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  country_id: string;

  @Column()
  country: string;

  @Column()
  last_update: Date;
}
