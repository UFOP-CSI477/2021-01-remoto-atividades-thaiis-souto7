import { Associate } from '@modules/users/infra/typeorm/entities/Associate';
import { IAssociatesRepository } from '@modules/users/infra/typeorm/repositories/IAssociatesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListAssociatesService {
  constructor(
    @inject('AssociatesRepository')
    private associatesRepository: IAssociatesRepository,
  ) {}

  public async execute(email?: string): Promise<Associate[] | Associate> {
    const associates =
      email !== undefined
        ? await this.associatesRepository.findByEmail(email)
        : await this.associatesRepository.findAll();

    if (!associates) {
      throw new AppError('Associates not found');
    }

    return associates;
  }
}
