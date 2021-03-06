import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'
import User from '../models/User'
import File from '../models/File'
import sessionSchema from '../validations/sessionValidation'

class SessionController {
  async store(req, res) {
    const { expiresIn, secret } = authConfig
    const { email, password } = req.body

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url']
        }
      ]
    })

    if (!(await sessionSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' })
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }

    if (!(await (await user).checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name, avatar, provider } = user

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        provider
      },
      token: jwt.sign({ id }, secret, { expiresIn })
    })
  }
}

export default new SessionController()
