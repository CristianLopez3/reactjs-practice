# creamos la imagen basada en nginx
FROM node:alpine
# establecemos el directorio de trabajo de la app
WORKDIR /app
# copiamos los archivos del proyecto al directorio de trabajo para poder instalarlos
ADD package*.json ./
# instalamos las dependencias del proyecto, si se necesitan (package.json)
RUN npm install 
ADD . .
CMD node index.jsx
