FROM node:10.9-slim

RUN apt-get -y update \
	&& apt-get install -y git

COPY ./package.json ./package-lock.json /app/

RUN mkdir /my-app
WORKDIR /my-app
ADD . /my-app/

RUN npm install

RUN apt-get autoremove -y && apt-get autoclean -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*

USER node