import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  staff_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ default: true })
  active: boolean;
}
