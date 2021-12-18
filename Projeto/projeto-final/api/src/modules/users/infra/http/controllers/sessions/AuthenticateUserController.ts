import { AuthenticateUserService } from '@modules/users/services/sessions/AuthenticateUserService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class AuthenticateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUser = container.resolve(AuthenticateUserService);

    const { email, password } = request.body;

    const { user, token, refresh_token } = await authenticateUser.execute({
      email,
      password,
    });

    return response
      .status(200)
      .json({ user: classToClass(user), token, refresh_token });
  }
}
