import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailExists = this.usersRepository.findByEmail(email);

    if (!emailExists) {
      const user = this.usersRepository.create({ name, email });
      return user;
    }

    throw Error('Email already taken');
  }
}

export { CreateUserUseCase };
