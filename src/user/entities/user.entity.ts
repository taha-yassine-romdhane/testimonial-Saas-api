// src/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SocialLink } from './socialLink.entity';
import { Address } from './address.entity';
import { Company } from './company.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'binary', nullable: true })
  profileImage: Buffer;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isGuest: boolean;

  @Column({ nullable: true })
  job: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => SocialLink, (socialLink) => socialLink.user)
  socialLinks: SocialLink[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Company, (company) => company.user)
  companies: Company[];
}