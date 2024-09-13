import { Global, Module } from '@nestjs/common';
import { AtStrategy } from './strategy/at.strategy';
import { RtStrategy } from './strategy/rt.strategy';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@Global()
@Module({
  imports: [LoginModule, RegisterModule],
  providers: [AtStrategy, RtStrategy],
  exports: [AtStrategy, RtStrategy],
})
export class AuthModule {}
