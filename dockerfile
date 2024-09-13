FROM node:20-slim


RUN apt-get update && apt-get install -y tzdata


ENV TZ=Asia/Kolkata


WORKDIR /app

COPY package*.json ./


RUN npm ci

COPY . .


EXPOSE 3000


ENV NODE_ENV=production
ENV PORT=3000


CMD ["npm","run","start:prod"]