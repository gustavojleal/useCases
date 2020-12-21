import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPassword from './ResetPasswordUseCase';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPassword);

    await resetPassword.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
