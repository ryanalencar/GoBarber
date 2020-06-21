import { Router } from 'express';
import User from './database/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'RyanAlencar',
    email: 'ryan123@gmail.com',
    password_hash: '2141242412',
  });

  return res.json(user);
});

module.exports = routes;
