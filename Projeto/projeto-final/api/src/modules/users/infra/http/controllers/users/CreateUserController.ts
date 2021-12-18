import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { CreateUserService } from '@modules/users/services/users/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const creareUserService = container.resolve(CreateUserService);

    const user: ICreateUserDTO = {
      name,
      email,
      password,
    };

    await creareUserService.execute(user);

    return response.status(200).json(user);
  }
}
