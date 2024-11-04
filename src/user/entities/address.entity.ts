// src/entities/address.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Company } from './company.entity';

export enum AddressType {
  HOME_LOCATION = 'Home_location',
  JOB_LOCATION = 'Job_location',
}

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  postalCode: number;

  @Column({
    type: 'enum',
    enum: AddressType,
  })
  type: AddressType;



  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.addresses, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Company, (company) => company.addresses, { onDelete: 'SET NULL', nullable: true })
  company: Company;

}