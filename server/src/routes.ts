import { Router } from 'express';

import orphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', async (request, response) => {
    return orphanagesController.index(request, response);
});

routes.post('/orphanages', async (request, response) => {
    return orphanagesController.store(request, response);
});

export default routes;