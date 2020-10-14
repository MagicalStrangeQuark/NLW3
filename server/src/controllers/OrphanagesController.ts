import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from './../models/Orphanage';

export default {
    async index(request: Request, response: Response) {
        const orphanages = await getRepository(Orphanage).find();

        return response.status(200).json(orphanages);
    },
    async show(request: Request, response: Response) {
        const orphanage = await getRepository(Orphanage).findOneOrFail(request.params.id);

        return response.status(200).json(orphanage);
    },
    async store(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => { return { path: image.filename } });

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
    }
}