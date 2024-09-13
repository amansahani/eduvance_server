import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { CommonModules } from 'src/common/common.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [CommonModules],
  providers: [LoginService, JwtService],
  controllers: [LoginController],
})
export class LoginModule {}
