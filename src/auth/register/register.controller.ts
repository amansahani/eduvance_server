import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateUserDto } from './DTO/register.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('/')
  async register(@Body() payload: CreateUserDto) {
    return this.registerService.register(payload.email, payload.password);
  }
}
