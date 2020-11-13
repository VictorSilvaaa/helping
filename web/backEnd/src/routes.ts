import { Router } from 'express';
import DonatorController from './controllers/DonatorController'

const routes = Router();

routes.post('/donator', DonatorController.create);
routes.get('/donators', DonatorController.index);
routes.get('/donator/:id', DonatorController.show);

export default routes;