import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [RegisterController],
  providers: [RegisterService, JwtService],
})
export class RegisterModule {}
