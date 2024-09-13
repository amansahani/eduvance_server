import { Injectable } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Injectable()
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
