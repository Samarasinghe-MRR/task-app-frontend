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

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]