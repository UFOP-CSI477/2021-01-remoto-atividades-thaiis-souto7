import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { formatDate } from '@modules/users/utils/formatDate';
import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { IHashProvider } from '@modules/users/providers/hashProvider/IHashProvider';
import { ITokenProvider } from '@modules/users/providers/tokenProvider/ITokenProvider';
import { classToClass } from 'class-transformer';
import { IUsersRepository } from '../../infra/typeorm/repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../infra/typeorm/repositories/IUsersTokensRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: ICreateUserDTO;
  token: string;
  refresh_token: string;
}

@injectable()
export class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password', 401);
    }

    if (password !== user.password) {
      throw new AppError('Incorrect email/password', 401);
    }

    const {
      secret,
      expiresIn,
      secretRefreshToken,
      expiresInRefreshToken,
      expiresInRefreshTokenDays,
    } = authConfig.jwt;

    const token = this.tokenProvider.generationToken(
      secret,
      user.id,
      expiresIn,
    );

    const refreshToken = this.tokenProvider.generationRefreshToken(
      email,
      secretRefreshToken,
      user.id,
      expiresInRefreshToken,
    );

    const refreshTokenExpiresDate = formatDate(expiresInRefreshTokenDays);

    await this.usersTokensRepository.create({
      expires_date: refreshTokenExpiresDate,
      refresh_token: refreshToken,
      user_id: user.id,
    });

    return {
      user: classToClass(user),
      token,
      refresh_token: refreshToken,
    };
  }
}
