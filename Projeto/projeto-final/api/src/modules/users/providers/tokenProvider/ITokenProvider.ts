interface IPayload {
  sub: string;
  email: string;
}

export interface ITokenProvider {
  verifyToken(refresh_token: string, secret_refresh_token: string): IPayload;
  generationToken(secret: string, user_id: string, expires_in: string): string;
  generationRefreshToken(
    email: string,
    secret_refresh_token: string,
    user_id: string,
    expires_in_refresh_token: string,
  ): string;
}
