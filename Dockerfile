# Use the official nginx image as the base
FROM nginx:alpine

# Remove the default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the static content (HTML, CSS, JS) into the nginx container
COPY path/to/your/static/files /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]