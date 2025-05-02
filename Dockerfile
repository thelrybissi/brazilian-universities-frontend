FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build da versão estática (sem SSR)
RUN npm run build

FROM nginx:alpine

# Copia a config do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Atenção: agora o path é direto para /dist/brazilian-universities-frontend
COPY --from=build /app/dist/brazilian-universities-frontend /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
