
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  address_id: string;

  @Column()
  address: string;

  @Column()
  address2: string;

  @Column()
  district: string;

  @Column()
  postal_code: string;

  @Column()
  phone: string;

  @Column()
  location: string;

  @OneToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city_id: City;

  @Column()
  last_update: Date;
}
