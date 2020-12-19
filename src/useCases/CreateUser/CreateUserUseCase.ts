import { inject, injectable } from 'tsyringe'

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { AppError } from "../../shared/errors/AppError";
import ICacheProvider from '../../providers/CacheProvider/models/ICacheProvider'
import IHashProvider from '../../shared/HashProvider/models/IHashProvider'
// import {  } from '../../providers/IMailProvider/IMailProvider';

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,

    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,

    // @inject('IMailProvider')
    // private mailProvider: IMailProvider,
  ) {}

  async execute({name, email, password}: ICreateUserRequestDTO): Promise<User> {
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

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: data.name,
    //     email: data.email,
    //   },
    //   from: {
    //     name: 'Equipe do Meu App',
    //     email: 'equipe@meuapp.com',
    //   },
    //   subject: 'Seja bem-vindo à plataforma',
    //   body: 'Você já pode fazer login em nossa plataforma.'
      
    // })
    return user;
  }
}