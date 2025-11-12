import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  user: string;
  password: string;
  email: string;
  refreshToken: string;
}

const UserSchema = new Schema<IUser>({
  user: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  refreshToken: { type: String },
});

export const User = model<IUser>("User", UserSchema);
export default User;
