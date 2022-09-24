import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { email, name } = request.body;

      const user = this.createUserUseCase.execute({ name, email });

      if (user) {
        return response.status(201).send(user);
      }
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: error.message });
    }
  }
}

export { CreateUserController };
