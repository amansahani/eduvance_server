import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_PWD,
  DB_USER,
} from '../constant/constant';
import { User } from '../entity/user.entity';
import { TaskEntity } from 'src/task/entity/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        database: DB_NAME,
        port: Number.parseInt(DB_PORT),
        username: DB_USER,
        password: DB_PWD,
        host: DB_HOST,
        entities: [User, TaskEntity],
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class PostgresDBModule {}
