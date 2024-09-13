import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Fix bugs in application' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Resolve issues in the login flow' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'High' })
  @IsNotEmpty()
  priority: string;

  @ApiProperty({ example: ['development', 'urgent'] })
  @IsOptional()
  @IsArray()
  tags: string[];

  @ApiProperty({ example: 'Backlog' })
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: '2024-09-11T10:30:00Z' })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: 'user@example.com' })
  @IsNotEmpty()
  email: string;
}

export class UpdateTaskStatusDto {
  @ApiProperty({ example: 'In Progress' })
  @IsNotEmpty()
  status: string;
}
