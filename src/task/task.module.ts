import { Global, Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskRepository } from './repository/task.repository';
import { TaskEntity } from './entity/task.entity';

@Global()
@Module({
  controllers: [TaskController],
  providers: [TaskService, TaskEntity, TaskRepository],
})
export class TaskModule {}
