import jwt from 'jsonwebtoken';

export const createAccessToken = (userId) => jwt.sign(userId, process.env.ACCESS_SECRET, {
  expiresIn: '15m',
});

export const createRefreshToken = (userId) => jwt.sign(userId, process.env.REFRESH_SECRET, {
  expiresIn: '7d',
});
