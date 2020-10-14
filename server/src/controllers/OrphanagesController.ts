import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from './../models/Orphanage';

import orphanageView from './../views/orphanages';

export default {
    async index(request: Request, response: Response) {
        const orphanages = await getRepository(Orphanage).find({
            relations: ['images']
        });

        return response.status(200).json(orphanageView.renderMany(orphanages));
    },
    async show(request: Request, response: Response) {
        const orphanage = await getRepository(Orphanage).findOneOrFail(request.params.id, {
            relations: ['images']
        });

        return response.status(200).json(orphanageView.render(orphanage));
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