import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import userModel from "@/models/user";
import { UserDto } from "@/tools/dtos";
import ApiError from "@/exceptions/api-error";
import tokenService from "./token";

class UserService {
  static registration = async (email: string, password: string) => {
    const candidate = await userModel.findOne({email})
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
    }
    const salt = await bcrypt.genSalt(9);
    const hashPassword = await bcrypt.hash(password, salt);
    const activationLink = uuidv4();

    const user = await userModel.create({email, password: hashPassword, activationLink});

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {...tokens, user: userDto}
  }

  static login = async (email: string, password: string) => {
    const user = await userModel.findOne({email})
    if (!user) {
        throw ApiError.BadRequest('Пользователь с таким email не найден')
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
  
    if (!isPassEquals) {
        throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({...userDto});

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {...tokens, user: userDto}
  }

  static logout = async (refreshToken: string) => {
    const token = await tokenService.removeToken(refreshToken);
    return token;
}
}

export default UserService;
