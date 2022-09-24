import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser = new User();

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
      admin: false,
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((el) => el.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    const newUser = this.users.find((el) => el.id === receivedUser.id);
    const arrayOfUserWithoutReceived = this.users.filter(
      (el) => el.id !== receivedUser.id
    );

    Object.assign(newUser, { admin: true });
    this.users = arrayOfUserWithoutReceived;

    return newUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
