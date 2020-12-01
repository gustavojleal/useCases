import { Router } from 'express';
import { getRepository } from 'typeorm';

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import CreateUserService from "../services/CreateUserService";
import User from '../models/User';

const usersRouter = Router();
usersRouter.get('/', ensureAuthenticated, async (request, response) => {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();

    return response.json(users);
})


usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();
    const newUser = await createUser.execute({ name, email, password });

    const newUserWithoutPassword = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        created_at: newUser.created_at,
        updated_at: newUser.updated_at,
    }; 

    return response.json( newUserWithoutPassword );

})

export default usersRouter;