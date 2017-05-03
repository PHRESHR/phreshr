FROM node:7.9.0-alpine

# Copy application files
COPY . /usr/src/app
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install --production --no-progress

EXPOSE 80

CMD npm start