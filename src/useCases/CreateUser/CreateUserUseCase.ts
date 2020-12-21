import { inject, injectable } from 'tsyringe'

import { AppError } from "../../shared/errors/AppError";
import ICacheProvider from '../../providers/CacheProvider/models/ICacheProvider'
import { IUsersRepository } from "../../repositories/IUsersRepository";
import IHashProvider from '../../shared/HashProvider/models/IHashProvider'
import { ICreateUserDTO } from "./CreateUserDTO";

import User from "../../entities/User";

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  async execute({name, email, password}: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('Email address already exists.');
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await this.cacheProvider.invalidate('users-list');

    return user;
  }
}