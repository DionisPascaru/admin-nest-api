# Use a Node.js Alpine-based image for the development stage
FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install application dependencies using `npm install`
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Define the command to start your application in development mode
ENTRYPOINT ["/bin/bash", "-c", "npm run start:dev"]
