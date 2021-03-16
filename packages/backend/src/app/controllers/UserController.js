import User from '../models/User';
import File from '../models/File';
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

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }
}

export default new UserController();
