import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies';
import connectToMongoDb from '@/tools/connectMongo'
import ApiError from '@/exceptions/api-error';
import userService from '@/services/user';


const authController = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDb();
    switch (req.method) {
      case 'POST':
        try {
          const { email, password } = JSON.parse(req.body);
          const userData = await userService.login(email, password);
          const cookies = new Cookies(req, res);
          cookies.set('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
          return res.json(userData);
        } catch (err) {
          const {status, message, errors} = err as ApiError;
          return res.status(status).json({ message, errors });
        }

      default:
        res.status(400).json({ message: 'Invalid request' });
        break;
    }
  };

export default authController;
