import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import { createUserController } from '../CreateUser';
// import UserAvatarController from '../controllers/UserAvatarController';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
// const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.multer);

usersRouter.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

// usersRouter.patch(
//   '/avatar',
//   ensureAuthenticated,
//   upload.single('avatar'),
//   userAvatarController.update,
// );

export { usersRouter };
