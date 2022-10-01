FROM node:14.15.0-alpine as build
WORKDIR /
COPY package.json ./
RUN  npm install
COPY . /
#ENTRYPOINT [ "yarn", "run" ]
CMD ["npm", "start"]
