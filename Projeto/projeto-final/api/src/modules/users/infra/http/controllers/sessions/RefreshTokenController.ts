import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RefreshTokenService } from '@modules/users/services/sessions/RefreshTokenService';

export class RefreshTokenController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const refreshTokenService = container.resolve(RefreshTokenService);

    const { token } = request.body;

    const refreshToken = await refreshTokenService.execute(token);

    return response.json(refreshToken);
  }
}
