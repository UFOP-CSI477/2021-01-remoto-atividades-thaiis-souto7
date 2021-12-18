import { IAssociatesRepository } from '@modules/users/infra/typeorm/repositories/IAssociatesRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteAssociateService {
  constructor(
    @inject('AssociatesRepository')
    private associatesRepository: IAssociatesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const associateExists = await this.associatesRepository.findById(id);

    if (!associateExists) {
      throw new AppError('This associate does not exist !');
    }

    await this.associatesRepository.delete(associateExists);
  }
}
