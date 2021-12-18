import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '../entities/User';

export interface IUsersRepository {
  findAll(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  findByName(name: string): Promise<User[] | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  update(user: User): Promise<User>;
  delete(user: User): Promise<User>;
}
