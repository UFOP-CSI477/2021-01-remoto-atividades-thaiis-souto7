import { IAssociatesRepository } from '@modules/users/infra/typeorm/repositories/IAssociatesRepository';
import { AssociatesRepository } from '@modules/users/infra/typeorm/repositories/implementations/AssociatesRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/implementations/UsersRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/implementations/UsersTokensRepository';
import { IUsersRepository } from '@modules/users/infra/typeorm/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/infra/typeorm/repositories/IUsersTokensRepository';
import { IHashProvider } from '@modules/users/providers/hashProvider/IHashProvider';
import { HashProvider } from '@modules/users/providers/hashProvider/implementations/HashProvider';
import { TokenProvider } from '@modules/users/providers/tokenProvider/implementations/TokenProvider';
import { ITokenProvider } from '@modules/users/providers/tokenProvider/ITokenProvider';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
container.registerSingleton<ITokenProvider>('TokenProvider', TokenProvider);

container.registerSingleton<IAssociatesRepository>(
  'AssociatesRepository',
  AssociatesRepository,
);
