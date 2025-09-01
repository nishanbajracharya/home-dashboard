# Stage 1: Build the application
# Use a Node.js image with the necessary build tools.
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Run the build command
RUN npm run build

# Stage 2: Create the final production image
# Use a minimal Node.js image to run the application
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Copy the built application from the 'build' stage
COPY --from=build /app/client/dist ./client/dist
COPY --from=build /app/server/dist ./server/dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose the port the application will run on
EXPOSE 8081

# Set the command to run the application
CMD ["node", "server/dist/index.js"]