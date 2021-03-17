FROM node:alpine:3.13.2
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
