FROM node:20-alpine

WORKDIR app

COPY package*.json ./

# cache the npm install step, making subsequent builds faster
RUN npm install

# copy the rest of the app code
COPY . .

EXPOSE 8000

CMD npm run devstart