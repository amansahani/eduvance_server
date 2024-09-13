import { Module } from '@nestjs/common';

import { LoginController } from './auth/login/login.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { PostgresDBModule } from './common/config/db.postgres';

@Module({
  imports: [PostgresDBModule, AuthModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
