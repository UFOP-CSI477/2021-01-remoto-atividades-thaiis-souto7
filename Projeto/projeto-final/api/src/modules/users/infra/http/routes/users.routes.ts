import { Router } from 'express';
import { ListUserController } from '../controllers/users/ListUserController';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';
import { DeleteUserController } from '../controllers/users/DeleteUserController';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const listUserController = new ListUserController();
  await listUserController.handle(request, response);
});

usersRouter.post('/', async (request, response) => {
  const createUserController = new CreateUserController();
  await createUserController.handle(request, response);
});

usersRouter.put('/:id', async (request, response) => {
  const updateUserController = new UpdateUserController();
  await updateUserController.handle(request, response);
});

usersRouter.delete('/:id', async (request, response) => {
  const deleteUserController = new DeleteUserController();
  await deleteUserController.handle(request, response);
});

export default usersRouter;
