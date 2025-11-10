/* eslint-disable no-unused-vars */
import Service from './Service.js';

/**
* User authorization
* Login with email and password
*
* userWithoutName UserWithoutName 
* returns _user_login_post_200_response
* */
const userLoginPOST = ({ userWithoutName }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userWithoutName,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Getting user profile
*
* returns _user_profile_get_200_response
* */
const userProfileGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get access token
* Uses refreshToken stored in cookies to issue a new access token
*
* refreshToken String Refresh token stored in cookies
* returns _user_login_post_200_response
* */
const userRefreshTokenPOST = ({ refreshToken }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        refreshToken,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a new user account
* Register a new user by providing name, email, and password
*
* user User 
* returns _user_register_post_201_response
* */
const userRegisterPOST = ({ user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        user,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
 export default {
  userLoginPOST,
  userProfileGET,
  userRefreshTokenPOST,
  userRegisterPOST,
};
