import { Router } from 'express';

import { usersRouter } from './useCases/routes/users.routes';
// import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
// import passwordRouter from '@modules/users/infra/http/routes/password.routes';
// import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/password', passwordRouter);
// routes.use('/profile', profileRouter);

export { routes };
