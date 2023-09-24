# stage1 - build react app first
FROM node:18.16.0-alpine3.18
WORKDIR /portfolio
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV PORT=3001
EXPOSE 3001
CMD ["npm", "start"]

# Updated