import { IUser } from "@/models/user";

export class UserDto {
  email;
  id;
  isActivated;

  constructor(model: IUser) {
      this.email = model.email;
      this.id = model._id;
      this.isActivated = model.isActivated;
  }
}

