import { getRepository } from 'typeorm';

import AppError from '../erros/AppError';
import ProjectTemplate from '../models/ProjectTemplate';

class DeleteProjectTemplateService {
    public async execute(id: string): Promise<any> {
        const templates = getRepository(ProjectTemplate);

        const findTemplate = await templates.findOne( id );

        if(!findTemplate) {
            throw new AppError('Template not found', 401);
        };

        return await templates.remove(findTemplate);
    }
}

export default DeleteProjectTemplateService;