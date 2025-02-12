FROM node:20-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY ../../../Desktop .

RUN npm run build

EXPOSE 5174

CMD ["npm", "run", "start"]