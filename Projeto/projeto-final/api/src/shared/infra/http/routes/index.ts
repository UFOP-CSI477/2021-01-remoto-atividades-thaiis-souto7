import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import associatesRoutes from '@modules/users/infra/http/routes/associates.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/associates', associatesRoutes);
router.use('/sessions', sessionsRouter);

export default router;
