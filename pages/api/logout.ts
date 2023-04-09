import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies';
import connectToMongoDb from '@/tools/connectMongo'
import ApiError from '@/exceptions/api-error';
import userService from '@/services/user';


const logoutController = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDb();
        try {
          const { refreshToken } = req.cookies;
          const cookies = new Cookies(req, res);
          const token = await userService.logout(refreshToken || '');
          cookies.set('refreshToken', refreshToken, {maxAge: -1, httpOnly: true});
          return res.json(token);
        } catch (err) {
          const {status, message, errors} = err as ApiError;
          return res.status(status).json({ message, errors });
        }
  };

export default logoutController;
