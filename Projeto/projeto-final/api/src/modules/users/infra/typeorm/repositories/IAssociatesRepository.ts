import { ICreateAssociateDTO } from '@modules/users/dtos/ICreateAssociateDTO';
import { Associate } from '../entities/Associate';

export interface IAssociatesRepository {
  findAll(): Promise<Associate[]>;
  findByEmail(email: string): Promise<Associate | undefined>;
  create(data: ICreateAssociateDTO): Promise<Associate>;
  findById(id: string): Promise<Associate | undefined>;
  update(associate: Associate): Promise<Associate>;
  delete(associate: Associate): Promise<void>;
}
