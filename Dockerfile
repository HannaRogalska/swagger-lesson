FROM node:20-alpine

WORKDIR /app

COPY ./server/package*.json /app

RUN npm ci --only=production

COPY ./server/. .

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "index.js"]