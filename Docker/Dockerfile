FROM ubuntu:24.04
RUN apt-get update && apt-get install -y curl ca-certificates git
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 4200
