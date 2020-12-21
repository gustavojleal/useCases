import { Router } from 'express';

import { usersRouter } from './useCases/routes/users.routes';
import sessionsRouter from './useCases/routes/sessions.routes';
import passwordRouter from './useCases/routes/password.routes';
import profileRouter from './useCases/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export { routes };
