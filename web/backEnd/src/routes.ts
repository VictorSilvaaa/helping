import { Router } from 'express';
import DonatorController from './controllers/DonatorController'

const routes = Router();

routes.post('/donator', DonatorController.create);
routes.get('/donators', DonatorController.index);

export default routes;