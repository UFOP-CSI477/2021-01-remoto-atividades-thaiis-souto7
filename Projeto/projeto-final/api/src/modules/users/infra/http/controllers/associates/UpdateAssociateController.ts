import { UpdateAssociateService } from '@modules/users/services/associates/UpdateAssociateService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateAssociateController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updateAssociateService = container.resolve(UpdateAssociateService);

    const { id } = request.params;

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

    const associate = {
      id,
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

    const createdAssociate = await updateAssociateService.execute(associate);

    return response.status(200).json(createdAssociate);
  }
}
