
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Staff } from './staff.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  store_id: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address_id: Address;

  @OneToOne(() => Staff)
  @JoinColumn({ name: 'manager_staff_id' })
  manager_staff_id: Staff;

  @Column()
  last_update: Date;
}
