import { request, response, Router } from 'express';
import { getRepository } from 'typeorm';

import CreateProjectTemplateService from '../services/CreateProjectTemplateService';
import DeleteProjectTemplateService from '../services/DeleteProjectTemplateService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProjectTemplate from '../models/ProjectTemplate';

const templatesRouter = Router();

templatesRouter.get('/', ensureAuthenticated, async (request, response) => {
    const templatesRepository = getRepository(ProjectTemplate);
    const templates = await templatesRepository.find();

    return response.json(templates);

})

templatesRouter.post('/', ensureAuthenticated, async (request, response) => {
    const { name, columnQuant, columnColor } = request.body;

    const createNewTemplate = new CreateProjectTemplateService();
    const template = await createNewTemplate.execute({
        name,
        columnColor,
        columnQuant
    });

    return response.json( template );
});

templatesRouter.delete('/:id', ensureAuthenticated, async (request, response) => {
    const { id } = request.params;

    const deleteTemplate = new DeleteProjectTemplateService();

    await deleteTemplate.execute( id );

    return response.json( { message: 'Deleted '});
})
export default templatesRouter;