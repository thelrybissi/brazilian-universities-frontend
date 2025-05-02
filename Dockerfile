FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli && npm install && ng build --configuration production

FROM nginx:alpine
COPY --from=build /app/dist/brazilian-universities-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
