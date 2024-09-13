import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/common/repository/user.repository';
import { User } from 'src/common/entity/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new ConflictException('User already exist with email');
    }
    const newUser = await this.userRepository.createUser({
      email,
      password: hashedPassword,
    });
    return this.jwtService.sign(
      { email: newUser.email },
      { privateKey: 'eduvance' },
    );
  }
}
