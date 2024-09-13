import { Injectable } from '@nestjs/common';
import { User } from 'src/common/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Injectable()
@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  priority: string;

  @Column('simple-array')
  tags: string[];

  @Column()
  status: string;

  @Column('timestamp')
  date: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;
}
