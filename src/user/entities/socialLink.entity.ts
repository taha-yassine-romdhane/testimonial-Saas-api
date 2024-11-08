// src/entities/social-link.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('social_link')
export class SocialLink {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.socialLinks, { onDelete: 'CASCADE' })
  user: User;
}