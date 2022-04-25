FROM node:16

# create app directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5000

# Start app
CMD ["npm", "start"]