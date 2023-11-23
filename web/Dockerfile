# Use an official Node.js image as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Next.js uses
EXPOSE 3001

# Start the Next.js app
CMD ["npm", "run", "dev"]
