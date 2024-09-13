import { Injectable } from '@nestjs/common';
import { TaskRepository } from './repository/task.repository';
import { UserRepository } from 'src/common/repository/user.repository';
import { TaskEntity } from './entity/task.entity';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async createTask(
    taskData: Partial<TaskEntity>,
    email: string,
  ): Promise<TaskEntity> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const task = this.taskRepository.createTask({
      ...taskData,
      user,
    });

    return task;
  }

  async getTasksByStatus(status: string): Promise<any[]> {
    const tasks = await this.taskRepository.findTasksByStatus(status);

    return tasks.map((task) => {
      const { user, ...taskDetails } = task;
      return { ...taskDetails, email: user.email };
    });
  }

  async updateTaskStatus(
    taskId: string,
    newStatus: string,
  ): Promise<TaskEntity> {
    const task = await this.taskRepository.findTaskById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    task.status = newStatus;
    return this.taskRepository.updateTask(task);
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.taskRepository.deleteTask(taskId);
  }
}
