import { DeleteAssociateService } from '@modules/users/services/associates/DeleteAssociateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class DeleteAssociateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAssociateService = container.resolve(DeleteAssociateService);

    await deleteAssociateService.execute(id);

    return response.status(200).send();
  }
}
