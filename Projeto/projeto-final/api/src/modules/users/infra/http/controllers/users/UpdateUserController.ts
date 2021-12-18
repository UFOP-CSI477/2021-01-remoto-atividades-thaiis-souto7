import { UpdateUserService } from '@modules/users/services/users/UpdateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute({
      id,
      name,
      email,
      password,
    });

    return response.status(200).json(user);
  }
}
