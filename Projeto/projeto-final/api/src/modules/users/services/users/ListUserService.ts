import { User } from '@modules/users/infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import { classToClass } from 'class-transformer';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../infra/typeorm/repositories/IUsersRepository';

@injectable()
export default class ListUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(name?: string): Promise<User[] | User> {
    const users =
      name !== undefined
        ? await this.usersRepository.findByName(name)
        : await this.usersRepository.findAll();

    if (!users) {
      throw new AppError('Users not found');
    }

    return classToClass(users);
  }
}
