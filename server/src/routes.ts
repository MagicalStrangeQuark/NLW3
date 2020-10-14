import { Router } from 'express';

import orphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/orphanages', orphanagesController.index);

routes.post('/orphanages', orphanagesController.store);

export default routes;