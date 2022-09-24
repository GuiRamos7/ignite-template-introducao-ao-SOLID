import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(_: Request, response: Response): Response {
    const users = this.listAllUsersUseCase.execute({ user_id: '' });

    return response.status(200).send(users);
  }
}

export { ListAllUsersController };
