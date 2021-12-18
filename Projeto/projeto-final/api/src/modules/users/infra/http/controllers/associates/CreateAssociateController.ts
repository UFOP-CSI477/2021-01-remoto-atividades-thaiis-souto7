import { ICreateAssociateDTO } from '@modules/users/dtos/ICreateAssociateDTO';
import { CreateAssociateService } from '@modules/users/services/associates/CreateAssociateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateAssociateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createAssociateService = container.resolve(CreateAssociateService);

    const {
      name,
      cpf,
      password,
      date_of_birth,
      phone_number,
      celphone_number,
      email,
      chassi,
      renavam,
      license_plate,
      model,
      fuel,
      year_of_fabrication,
      cep,
      adress,
      city,
      state,
    } = request.body;

    const associate: ICreateAssociateDTO = {
      name,
      cpf,
      password,
      date_of_birth,
      phone_number,
      celphone_number,
      email,
      chassi,
      renavam,
      license_plate,
      model,
      fuel,
      year_of_fabrication,
      cep,
      adress,
      city,
      state,
    };
    const createdAssociate = await createAssociateService.execute(associate);

    return response.status(200).json(createdAssociate);
  }
}
