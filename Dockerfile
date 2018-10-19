FROM node:8.12-apline

RUN npm install pm2 -g
RUN npm install gulp -g

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app/

EXPOSE 80 443

CMD [ "pm2-docker", "ecosystem.config.js" ]