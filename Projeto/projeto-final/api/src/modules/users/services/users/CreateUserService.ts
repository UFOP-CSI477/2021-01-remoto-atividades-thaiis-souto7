import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '@modules/users/infra/typeorm/repositories/IUsersRepository';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(user: ICreateUserDTO): Promise<User> {
    const checkUserExists = await this.usersRepository.findByName(user.name);

    if (!checkUserExists) {
      throw new AppError('This user already exist.');
    }

    const created_user = this.usersRepository.create(user);

    return created_user;
  }
}
