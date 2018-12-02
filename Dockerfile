FROM node:latest

WORKDIR /freshly

COPY ./package.json ./yarn.lock /
