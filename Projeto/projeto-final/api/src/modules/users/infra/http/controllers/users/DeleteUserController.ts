import { DeleteUserService } from '@modules/users/services/users/DeleteUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = container.resolve(DeleteUserService);

    await deleteUser.execute({ id });

    return response.status(204).send();
  }
}
