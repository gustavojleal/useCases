import { User } from "../entities/User";
import { ICreateUserRequestDTO } from '../useCases/CreateUser/CreateUserDTO';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
  create(data: ICreateUserRequestDTO): Promise<User>;
}