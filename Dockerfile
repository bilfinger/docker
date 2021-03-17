FROM node
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
