import mongoose, { Schema, model } from "mongoose";


const UserSchema = new Schema({
  user: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  refreshToken: { type: String },
});

export const User = model("User", UserSchema);

export default User;
