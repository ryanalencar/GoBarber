import User from '../models/User';
import { storeSchema, updateSchema } from '../validations/userValidation';

class UserController {
  async store(req, res) {
    if (!(await storeSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    const { id, name, email, provider } = user;

    return res.json({
      success: 'User created with success',
      id,
      name,
      email,
      provider,
    });
  }

  async update(req, res) {
    const { userId } = req;
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(userId);

    if (!(await updateSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
