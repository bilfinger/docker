FROM node:x86_64
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
