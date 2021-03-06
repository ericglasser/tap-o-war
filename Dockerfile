FROM node:8.12

RUN npm install pm2 -g
RUN npm install gulp -g
RUN npm install nodemon -g
RUN npm install @angular/cli -g

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app/

RUN ng build

EXPOSE 80 443

CMD [ "pm2-docker", "ecosystem.config.js" ]