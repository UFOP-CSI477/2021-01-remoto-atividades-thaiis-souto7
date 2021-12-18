import ListUserService from '@modules/users/services/users/ListUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ListUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const listUserService = container.resolve(ListUserService);

    const users = await listUserService.execute(name);

    return response.json(users);
  }
}
