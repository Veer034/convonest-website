# Production-ready static site via Nginx
FROM nginx:alpine

# Clean default nginx web folder
RUN rm -rf /usr/share/nginx/html/*

# Copy Next.js static export output
COPY ./out /usr/share/nginx/html

# Expose default port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

