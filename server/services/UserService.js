/* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Service from './Service.js';
import { User } from '../models/User.js';
import { createAccessToken, createRefreshToken } from '../helpers/token.js';
/**
 * User authorization
 * Login with email and password
 *
 * userWithoutName UserWithoutName
 * returns _user_login_post_200_response
 * */
const userLoginPOST = async (userWithoutName) => {
  const { password, email } = userWithoutName.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return Service.rejectResponse('User not found', 404);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return Service.rejectResponse('Authentication failed', 401);
    }
    const accessToken = createAccessToken({ userId: user._id });
    const refreshToken = createRefreshToken({ userId: user._id });
    user.refreshToken = refreshToken;
    await user.save();
    return Service.successResponse({ accessToken, refreshToken });
  } catch (error) {
    return Service.rejectResponse(
      error.message || 'Invalid input',
      error.status || 500,
    );
  }
};
/**
 * Getting user profile
 *
 * returns _user_profile_get_200_response
 * */
const userProfileGET = () => new Promise(async (resolve, reject) => {
  try {
    resolve(Service.successResponse({}));
  } catch (e) {
    reject(
      Service.rejectResponse(e.message || 'Invalid input', e.status || 405),
    );
  }
});
/**
 * Get access token
 * Uses refreshToken stored in cookies to issue a new access token
 *
 * refreshToken String Refresh token stored in cookies
 * returns _user_login_post_200_response
 * */
const userRefreshTokenPOST = async (refreshToken) => {
  const refreshTokenToken = refreshToken.cookies.refreshToken;
  if (!refreshTokenToken) {
    return Service.rejectResponse('Refresh token required', 400);
  }
  try {
    const decoded = jwt.verify(refreshTokenToken, process.env.REFRESH_SECRET);
    if (!decoded) {
      return Service.rejectResponse('Invalid refresh token', 403);
    }
    const { userId } = decoded;
    const user = await User.findById(userId);

    if (!user || user.refreshToken !== refreshTokenToken) {
      return Service.rejectResponse('Refresh token revoked', 403);
    }
    const accessToken = createAccessToken({ userId: user._id });
    return Service.successResponse({ accessToken });
  } catch (error) {
    return Service.rejectResponse(
      error.message || 'Refresh error',
      error.status || 500,
    );
  }
};
/**
 * Create a new user account
 * Register a new user by providing name, email, and password
 *
 * user User
 * returns _user_register_post_201_response
 * */
const userRegisterPOST = async (user) => {
  const { password, name, email } = user.body;

  if (!password || !name || !email) {
    return Service.rejectResponse('Email, name and password required', 400);
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      user: name,
      password: hashPassword,
      email,
    });
    const newUserWithoutPassword = newUser.toObject();
    delete newUserWithoutPassword.password;
    return Service.successResponse(newUserWithoutPassword);
  } catch (error) {
    return Service.rejectResponse(
      error.message || 'Invalid input',
      error.status || 500,
    );
  }
};
export default {
  userLoginPOST,
  userProfileGET,
  userRefreshTokenPOST,
  userRegisterPOST,
};
