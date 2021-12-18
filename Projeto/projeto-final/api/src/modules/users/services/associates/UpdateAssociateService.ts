import { IAssociatesRepository } from '@modules/users/infra/typeorm/repositories/IAssociatesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { Associate } from '../../infra/typeorm/entities/Associate';

interface IAssociate {
  id: string;
  name?: string;
  cpf?: string;
  password?: string;
  date_of_birth?: string;
  phone_number?: number;
  celphone_number?: number;
  email?: string;
  chassi?: string;
  renavam?: string;
  license_plate?: string;
  model?: string;
  fuel?: string;
  year_of_fabrication?: number;
  cep?: string;
  adress?: string;
  city?: string;
  state?: string;
}

@injectable()
export class UpdateAssociateService {
  constructor(
    @inject('AssociatesRepository')
    private associatesRepository: IAssociatesRepository,
  ) {}

  public async execute(associate: IAssociate): Promise<Associate> {
    const found_associate = await this.associatesRepository.findById(
      associate.id,
    );

    if (!found_associate) {
      throw new AppError('This associate does not exist.');
    }

    if (associate.adress) {
      found_associate.adress = associate.adress;
    }
    if (associate.celphone_number) {
      found_associate.celphone_number = associate.celphone_number;
    }
    if (associate.cep) {
      found_associate.cep = associate.cep;
    }
    if (associate.chassi) {
      found_associate.chassi = associate.chassi;
    }
    if (associate.city) {
      found_associate.city = associate.city;
    }
    if (associate.cpf) {
      found_associate.cpf = associate.cpf;
    }
    if (associate.date_of_birth) {
      found_associate.date_of_birth = associate.date_of_birth;
    }
    if (associate.email) {
      found_associate.email = associate.email;
    }
    if (associate.fuel) {
      found_associate.fuel = associate.fuel;
    }
    if (associate.license_plate) {
      found_associate.license_plate = associate.license_plate;
    }
    if (associate.model) {
      found_associate.model = associate.model;
    }
    if (associate.name) {
      found_associate.name = associate.name;
    }
    if (associate.password) {
      found_associate.password = associate.password;
    }
    if (associate.phone_number) {
      found_associate.phone_number = associate.phone_number;
    }
    if (associate.renavam) {
      found_associate.renavam = associate.renavam;
    }
    if (associate.state) {
      found_associate.state = associate.state;
    }
    if (associate.year_of_fabrication) {
      found_associate.year_of_fabrication = associate.year_of_fabrication;
    }

    const associateUpdated = await this.associatesRepository.update(
      found_associate,
    );

    return associateUpdated;
  }
}
