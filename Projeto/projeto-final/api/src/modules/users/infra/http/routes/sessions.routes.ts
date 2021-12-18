import { AuthenticateUserController } from '@modules/users/infra/http/controllers/sessions/AuthenticateUserController';
import { RefreshTokenController } from '@modules/users/infra/http/controllers/sessions/RefreshTokenController';
import { Router } from 'express';

const sessionsRouter = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

sessionsRouter.post('/', authenticateUserController.handle);
sessionsRouter.post('/refresh-token', refreshTokenController.handle);

export default sessionsRouter;
