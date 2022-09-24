import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: any;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log('user_id', user_id);
    const user = this.usersRepository.findById(user_id);
    console.log(user);

    if (!user) {
      throw new Error('User not exists');
    }

    if (!user.admin) {
      throw new Error('User is not an admin');
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
