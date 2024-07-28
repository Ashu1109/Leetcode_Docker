# Start from a Node.js base image
FROM node:20

WORKDIR /app

# Install Python and GCC
RUN apt-get update && apt-get install -y python3 gcc g++

COPY package*.json ./

COPY . .

RUN npm install


EXPOSE 8080
RUN npm run build
CMD ["npm", "run", "start"]
