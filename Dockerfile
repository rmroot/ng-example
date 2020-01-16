### STAGE 1: Build ###
###FROM node:12.7-alpine AS build ###
FROM jenkins/jnlp-slave:latest
USER root

RUN apt-get update && \
    apt-get -y install sudo && \
    apt-get -y install --yes curl && \
    curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash - && \
    apt-get install --yes nodejs && \
    apt-get install --yes build-essential

USER jenkins

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
