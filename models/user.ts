import { Schema, model, models, ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId,
  email: string,
  password: string,
  isActivated: boolean,
  activationLink: string,
}

const userSchema = new Schema({
  email: {type: String, unique: true, require: true},
  password: {type: String, require: true},
  isActivated: {type: String, default: false},
  activationLink: {type: String},
});

const User = models.user || model<IUser>('user', userSchema);

export default User;
