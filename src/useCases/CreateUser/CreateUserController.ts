import { Request, Response } from "express";
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserUseCase from "./CreateUserUseCase";

class CreateUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    const user = await createUser.execute({
      name,
      email,
      password
    });
  
    return response.json(classToClass(user));  
  }
}

export { CreateUserController }