import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { getRepository, Like, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findByName(name: string): Promise<User[] | undefined> {
    return this.ormRepository.find({
      name: Like(`%${name}%`),
    });
  }

  async findAll(): Promise<User[]> {
    return this.ormRepository.find();
  }

  async findByEmail(email: string): Promise<User> {
    return this.ormRepository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User | undefined> {
    return this.ormRepository.findOne(id);
  }

  async create(user: ICreateUserDTO): Promise<User> {
    const created_user = this.ormRepository.create(user);
    return this.ormRepository.save(created_user);
  }

  async update(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }

  async delete(user: User): Promise<User> {
    return this.ormRepository.remove(user);
  }
}
