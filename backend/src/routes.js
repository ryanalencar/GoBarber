import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// users
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// sessions
routes.post('/sessions', SessionController.store);

module.exports = routes;
