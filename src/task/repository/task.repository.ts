import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from '../entity/task.entity';

@Injectable()
export class TaskRepository extends Repository<TaskEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  async createTask(task: Partial<TaskEntity>): Promise<TaskEntity> {
    return this.save(task);
  }

  async findTasksByStatus(status: string): Promise<TaskEntity[]> {
    return this.find({ where: { status }, relations: ['user'] });
  }

  async updateTask(task: TaskEntity): Promise<TaskEntity> {
    return this.save(task);
  }

  async findTaskById(id: string): Promise<TaskEntity> {
    return this.findOne({ where: { id }, relations: ['user'] });
  }

  async deleteTask(id: string): Promise<void> {
    await this.delete(id);
  }
}
