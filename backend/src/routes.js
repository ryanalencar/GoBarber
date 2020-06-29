import { Router } from 'express';
import multer from 'multer';
import multerCfg from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerCfg);

// users
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// sessions
routes.post('/sessions', SessionController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;
