import User from "../entities/User";
import { ICreateUserDTO } from '../useCases/CreateUser/CreateUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}