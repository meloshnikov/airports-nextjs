import { Schema, model, models, ObjectId } from "mongoose";
import { IUser } from "./user";

export interface IToken {
  user: IUser,
  refreshToken: string,
}

const tokenSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  refreshToken: {type: String, required: true},
});

const Token = models.token || model<IToken>('token', tokenSchema);

export default Token;
