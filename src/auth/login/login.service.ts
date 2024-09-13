import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/common/repository/user.repository';
import { User } from 'src/common/entity/user.entity';

@Injectable()
export class LoginService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.jwtService.sign({ email: user.email });
  }
}
