import { ListAssociatesService } from '@modules/users/services/associates/ListAssociatesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ListAssociatesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const listAssociatesService = container.resolve(ListAssociatesService);

    const associates = await listAssociatesService.execute(name);

    return response.status(200).json(associates);
  }
}
