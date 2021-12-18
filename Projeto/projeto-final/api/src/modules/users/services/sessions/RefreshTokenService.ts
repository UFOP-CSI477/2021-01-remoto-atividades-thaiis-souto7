import { inject, injectable } from 'tsyringe';
import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { formatDate } from '@modules/users/utils/formatDate';
import { ITokenProvider } from '@modules/users/providers/tokenProvider/ITokenProvider';
import { IUsersTokensRepository } from '../../infra/typeorm/repositories/IUsersTokensRepository';

interface ITokenResponse {
  token: string;
  refresh_token: string;
}
@injectable()
export class RefreshTokenService {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,

    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) {}

  async execute(refresh_token: string): Promise<ITokenResponse> {
    const {
      secret,
      secretRefreshToken,
      expiresInRefreshToken,
      expiresInRefreshTokenDays,
    } = authConfig.jwt;

    const { email, sub } = this.tokenProvider.verifyToken(
      refresh_token,
      secretRefreshToken,
    );

    const userId = sub;

    const userToken =
      await this.usersTokensRepository.findByUserIdAndRefreshToken(
        userId,
        refresh_token,
      );

    if (!userToken) {
      throw new AppError('Refresh token invalid!', 401);
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const refreshToken = this.tokenProvider.generationRefreshToken(
      email,
      secretRefreshToken,
      userId,
      expiresInRefreshToken,
    );

    const expiresDate = formatDate(expiresInRefreshTokenDays);

    await this.usersTokensRepository.create({
      expires_date: expiresDate,
      refresh_token: refreshToken,
      user_id: userId,
    });

    const newToken = this.tokenProvider.generationToken(
      secret,
      userId,
      expiresInRefreshToken,
    );

    return {
      refresh_token: refreshToken,
      token: newToken,
    };
  }
}
