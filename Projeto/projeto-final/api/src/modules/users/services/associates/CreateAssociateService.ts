import { Associate } from '@modules/users/infra/typeorm/entities/Associate';
import { IAssociatesRepository } from '@modules/users/infra/typeorm/repositories/IAssociatesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateAssociateDTO } from '../../dtos/ICreateAssociateDTO';

@injectable()
export class CreateAssociateService {
  constructor(
    @inject('AssociatesRepository')
    private associatesRepository: IAssociatesRepository,
  ) {}

  public async execute(associate: ICreateAssociateDTO): Promise<Associate> {
    const checkEmailExists = await this.associatesRepository.findByEmail(
      associate.email,
    );

    if (checkEmailExists) {
      throw new AppError('This email is already used.');
    }

    const created_associate = this.associatesRepository.create(associate);

    return created_associate;
  }
}
