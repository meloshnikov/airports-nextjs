import jwt from 'jsonwebtoken';
import { ObjectId } from "mongoose";
import tokenModel from '@/models/token';


class TokenService {
    static generateTokens = (payload: string | object) => {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15s'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30s'});
        return {
            accessToken,
            refreshToken,
        }
    }

    static saveToken = async (userId: ObjectId, refreshToken: string) => {
        const tokenData = await tokenModel.findOne({user: userId});
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user: userId, refreshToken});
        return token;
    }

    static removeToken = async (refreshToken: string) => {
        const tokenData = await tokenModel.deleteOne({refreshToken});
        return tokenData;
    }
}

export default TokenService;
