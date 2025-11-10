#!/bin/sh

# Default backend URL for Docker Compose if not set
BACKEND_URL=${BACKEND_URL:-"backend:8080"}

echo "Configuring Nginx with BACKEND_URL: $BACKEND_URL"

# Replace the placeholder in nginx config with actual backend URL
sed -i "s|BACKEND_URL_PLACEHOLDER|$BACKEND_URL|g" /etc/nginx/conf.d/default.conf

echo "Nginx configuration updated:"
cat /etc/nginx/conf.d/default.conf | grep -A 5 "location /api/"

# Start nginx
exec nginx -g 'daemon off;'