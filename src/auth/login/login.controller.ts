import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './DTO/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  async login(@Body() payload: LoginDto) {
    return {
      token: await this.loginService.login(payload.email, payload.password),
    };
  }
}
