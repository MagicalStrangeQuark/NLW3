import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from './../models/Orphanage';

import orphanageView from './../views/orphanages';

import * as Yup from 'yup';

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

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false
        })

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
    }
}