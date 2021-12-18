import { ICreateAssociateDTO } from '@modules/users/dtos/ICreateAssociateDTO';
import { getRepository, Repository } from 'typeorm';
import { Associate } from '../../entities/Associate';
import { IAssociatesRepository } from '../IAssociatesRepository';

export class AssociatesRepository implements IAssociatesRepository {
  private ormRepository: Repository<Associate>;

  constructor() {
    this.ormRepository = getRepository(Associate);
  }

  public async findByEmail(email: string): Promise<Associate | undefined> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async findAll(): Promise<Associate[]> {
    const associates = this.ormRepository.find();
    return associates;
  }

  public async create(associate: ICreateAssociateDTO): Promise<Associate> {
    const created_associate = this.ormRepository.create(associate);
    return this.ormRepository.save(created_associate);
  }

  public async findById(id: string): Promise<Associate> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async update(associate: Associate): Promise<Associate> {
    return this.ormRepository.save(associate);
  }

  public async delete(associate: Associate): Promise<void> {
    this.ormRepository.remove(associate);
  }
}
