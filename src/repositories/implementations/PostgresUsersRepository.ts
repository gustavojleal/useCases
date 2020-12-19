import { getRepository, Repository } from 'typeorm';

import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserRequestDTO } from "useCases/CreateUser/CreateUserDTO";
import { User } from "../../entities/User";

class PostgresUsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;
  
  constructor() {
    this.ormRepository = getRepository(User);

  }
  
  async findById(id: string): Promise<User | undefined> {
      const user = this.ormRepository.findOne(id);

      return user;
  }
    
  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne( {where: { email }} );

    return user;
  }

  async create({name, email, password}: ICreateUserRequestDTO): Promise<User> {
    const user = this.ormRepository.create({name, email, password})
  
    await this.ormRepository.save(user);

    return user;
  }
}

export default PostgresUsersRepository;