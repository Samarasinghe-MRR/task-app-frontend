# =============================
# Stage 1: Build React app
# =============================
FROM node:lts-alpine AS build

WORKDIR /app

# Install dependencies and build app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# =============================
# Stage 2: Serve with Nginx
# =============================
FROM nginx:alpine

# Copy build output to Nginx's default html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration and entrypoint script
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /entrypoint.sh

# Make entrypoint script executable
RUN chmod +x /entrypoint.sh

# Expose port
EXPOSE 80

# Use custom entrypoint to configure nginx at runtime
ENTRYPOINT ["/entrypoint.sh"]