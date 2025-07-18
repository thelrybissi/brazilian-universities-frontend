FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/brazilian-universities-frontend /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
