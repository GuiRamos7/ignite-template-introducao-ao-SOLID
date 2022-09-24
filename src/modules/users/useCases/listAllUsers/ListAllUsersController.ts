import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const userId = request.headers.user_id;

    const users = this.listAllUsersUseCase.execute({
      user_id: userId,
    });

    return response.status(200).send(users);
  }
}

export { ListAllUsersController };
