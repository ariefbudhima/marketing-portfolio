# Gunakan base image yang sesuai
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Salin file konfigurasi package
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh aplikasi
COPY . .

# Build aplikasi
RUN npm run build

# Ekspos port
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
