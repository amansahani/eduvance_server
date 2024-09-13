import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './entity/task.entity';
import { CreateTaskDto, UpdateTaskStatusDto } from './DTO/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() payload: CreateTaskDto) {
    return this.taskService.createTask(
      { ...payload } as Partial<TaskEntity>,
      payload.email,
    );
  }

  @Get()
  async getTasksByStatus(@Query('status') status: string) {
    return this.taskService.getTasksByStatus(status);
  }

  @Put(':id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() payload: UpdateTaskStatusDto,
  ) {
    return this.taskService.updateTaskStatus(id, payload.status);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
