import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';
import { Store } from './store.entity';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  staff_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  address_id: Address;

  // @Column({ nullable: true })
  // picture: Buffer;

  @Column()
  email: string;

  @OneToOne(() => Store)
  @JoinColumn({ name: 'store_id' })
  store_id: Store;

  @Column()
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: true })
  active: boolean;
}
