import { getRepository } from 'typeorm';

import AppError from '../erros/AppError';
import ProjectTemplate from '../models/ProjectTemplate';

interface Request {
    name: string;
    columnQuant: number;
    columnColor:string;
}

class CreateProjectTemplateService {
    public async execute( { name, columnQuant, columnColor}: Request): Promise<ProjectTemplate> {
        const templateRepository = getRepository(ProjectTemplate);

        const templateExists = await templateRepository.findOne({
            where: { name },
        })

        if (templateExists) {
            throw new AppError('There template names is alredy used', 401);
        }

        const template = await templateRepository.create({
            name,
            columnColor,
            columnQuant
        });

        await templateRepository.save(template);

        return template;
    }
}

export default CreateProjectTemplateService;