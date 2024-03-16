import { Country } from 'src/main/entities/country.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  city_id: string;

  @Column()
  city: string;

  @OneToOne(() => Country)
  @JoinColumn({ name: 'country_id' })
  country_id: Country;

  @Column()
  last_update: Date;
}
