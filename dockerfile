# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /index

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY 

# Expose the port that the Node.js application will listen on
EXPOSE 3000

# Define the command to run the Node.js application
CMD ["node", "index.js"]
