import { ICreateUserTokenDTO } from '@modules/users/dtos/ICreateUserTokenDTO';
import { getRepository, Repository } from 'typeorm';
import { UserToken } from '../../entities/UserToken';
import { IUsersTokensRepository } from '../IUsersTokensRepository';

export class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserToken>;

  constructor() {
    this.repository = getRepository(UserToken);
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserToken | undefined> {
    return this.repository.findOne({
      user_id,
      refresh_token,
    });
  }

  async create({
    expires_date,
    user_id,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    return this.repository.save(userToken);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByRefreshToken(
    refresh_token: string,
  ): Promise<UserToken | undefined> {
    return this.repository.findOne({ refresh_token });
  }
}
