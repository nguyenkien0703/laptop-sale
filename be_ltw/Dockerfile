FROM node:18-alpine AS installedDeps

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .
EXPOSE 5000

CMD ["yarn", "start"]