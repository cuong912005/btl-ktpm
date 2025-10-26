# ============================
# 1️⃣ Build Frontend (Vite)
# ============================
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build


# ============================
# 2️⃣ Build Backend (ở root)
# ============================
FROM node:20-alpine AS backend-build
WORKDIR /app

# 🧰 Cài công cụ build tạm (cho bcrypt, sharp, sqlite3, v.v.)
RUN apk add --no-cache python3 make g++

# Copy package config ở root
COPY package*.json ./

# ❗ Cài dependencies (đừng dùng --production ở đây)
RUN npm install

# Copy toàn bộ source code backend
COPY . .

# Nếu backend dùng TypeScript, thêm dòng này:
# RUN npm run build

# Xóa devDependencies sau khi build xong
RUN npm prune --production

# Dọn công cụ build để image nhẹ hơn
RUN apk del python3 make g++


# ============================
# 3️⃣ Final runtime image
# ============================
FROM node:20-alpine
WORKDIR /app

# Copy backend source và node_modules đã build
COPY --from=backend-build /app /app

# Copy frontend build vào thư mục public
COPY --from=frontend-build /app/frontend/dist /app/public

EXPOSE 5000
CMD ["npm", "start"]
