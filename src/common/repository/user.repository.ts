import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }

  async findByEmail(email: string): Promise<User> {
    return this.findOne({ where: { email } });
  }

  async createUser(user: Partial<User>): Promise<User> {
    return this.save(user);
  }
}
