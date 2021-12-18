import { ICreateUserTokenDTO } from '@modules/users/dtos/ICreateUserTokenDTO';
import { UserToken } from '../entities/UserToken';

export interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserToken>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserToken | undefined>;
  deleteById(id: string): Promise<void>;

  findByRefreshToken(refresh_token: string): Promise<UserToken | undefined>;
}
