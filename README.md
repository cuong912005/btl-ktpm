# 🛒 E-Commerce Store

Một ứng dụng thương mại điện tử full-stack được xây dựng với MERN stack (MongoDB, Express, React, Node.js), tích hợp thanh toán Stripe và OAuth authentication.

## ✨ Tính năng chính

### 🔐 Xác thực & Bảo mật
- Đăng ký/Đăng nhập với JWT authentication
- OAuth 2.0 với Google và GitHub
- Bảo vệ routes và middleware xác thực
- Quản lý session với cookies

### 🛍️ Quản lý sản phẩm
- Hiển thị sản phẩm theo danh mục
- Sản phẩm nổi bật (Featured products)
- Gợi ý sản phẩm tương tự
- Tìm kiếm và lọc sản phẩm
- Upload hình ảnh với Cloudinary

### 🛒 Giỏ hàng & Thanh toán
- Thêm/Xóa/Cập nhật sản phẩm trong giỏ hàng
- Tính toán tổng giá tự động
- Tích hợp Stripe payment gateway
- Áp dụng mã giảm giá (coupon)
- Lưu trữ giỏ hàng với Redis cache

### 👨‍💼 Trang quản trị (Admin)
- Dashboard với analytics và biểu đồ
- Quản lý sản phẩm (CRUD operations)
- Tạo và quản lý mã giảm giá
- Theo dõi doanh thu và đơn hàng
- Thống kê người dùng

### 📊 Analytics & Monitoring
- Prometheus metrics endpoint
- Theo dõi hiệu suất hệ thống
- Thống kê doanh thu và người dùng

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database
- **Redis** - Caching và session storage
- **JWT** - Authentication tokens
- **Passport.js** - OAuth strategies
- **Stripe** - Payment processing
- **Cloudinary** - Image storage
- **Prometheus** - Metrics và monitoring

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Zustand** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **React Hot Toast** - Notifications

## 📋 Yêu cầu hệ thống

- Node.js (v16 trở lên)
- MongoDB
- Redis
- npm hoặc yarn

## 🚀 Cài đặt và chạy

### 1. Clone repository

```bash
git clone https://github.com/cuong912005/btl-ptpm.git
cd btl-ptpm
```

### 2. Cài đặt dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Cấu hình biến môi trường

Tạo file `.env` trong thư mục root với nội dung:

```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGO_URI=your_mongodb_connection_string

# JWT
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Redis
UPSTASH_REDIS_URL=your_redis_url

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173

# OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback
```

### 4. Chạy ứng dụng

#### Development mode

```bash
# Chạy backend (Terminal 1)
npm run dev

# Chạy frontend (Terminal 2)
cd frontend
npm run dev
```

Backend sẽ chạy tại: `http://localhost:5000`  
Frontend sẽ chạy tại: `http://localhost:5173`

#### Production mode

```bash
# Build frontend
npm run build

# Start server
npm start
```

### 5. Chạy với Docker (Optional)

```bash
# Start Redis và ứng dụng
docker-compose up -d

# Stop services
docker-compose down
```

## 📁 Cấu trúc dự án

```
├── backend/
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── lib/              # Utility functions & configs
│   └── server.js         # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── stores/       # Zustand stores
│   │   ├── lib/          # Utilities
│   │   └── App.jsx       # Main app component
│   └── public/           # Static files
│
├── docker-compose.yaml   # Docker configuration
├── Dockerfile            # Docker image definition
└── package.json          # Dependencies
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - Đăng ký tài khoản mới
- `POST /api/auth/login` - Đăng nhập
- `POST /api/auth/logout` - Đăng xuất
- `POST /api/auth/refresh-token` - Làm mới token
- `GET /api/auth/profile` - Lấy thông tin user
- `GET /api/auth/google` - OAuth Google
- `GET /api/auth/github` - OAuth GitHub

### Products
- `GET /api/products` - Lấy danh sách sản phẩm
- `GET /api/products/:id` - Lấy chi tiết sản phẩm
- `POST /api/products` - Tạo sản phẩm mới (Admin)
- `PUT /api/products/:id` - Cập nhật sản phẩm (Admin)
- `DELETE /api/products/:id` - Xóa sản phẩm (Admin)
- `GET /api/products/featured` - Lấy sản phẩm nổi bật
- `GET /api/products/category/:category` - Lấy sản phẩm theo danh mục
- `GET /api/products/recommendations` - Gợi ý sản phẩm

### Cart
- `GET /api/cart` - Lấy giỏ hàng
- `POST /api/cart` - Thêm sản phẩm vào giỏ
- `DELETE /api/cart` - Xóa sản phẩm khỏi giỏ
- `PUT /api/cart/:id` - Cập nhật số lượng

### Coupons
- `GET /api/coupons` - Lấy mã giảm giá
- `POST /api/coupons/validate` - Kiểm tra mã giảm giá

### Payment
- `POST /api/payments/create-checkout-session` - Tạo phiên thanh toán
- `POST /api/payments/checkout-success` - Xử lý thanh toán thành công

### Analytics (Admin)
- `GET /api/analytics` - Lấy dữ liệu analytics

## 👥 Vai trò người dùng

### Customer (Khách hàng)
- Xem và tìm kiếm sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Thanh toán đơn hàng
- Xem lịch sử đơn hàng

### Admin (Quản trị viên)
- Tất cả quyền của Customer
- Quản lý sản phẩm (thêm/sửa/xóa)
- Tạo và quản lý mã giảm giá
- Xem analytics và thống kê
- Quản lý đơn hàng

## 🎨 Screenshots

*(Thêm screenshots của ứng dụng tại đây)*

## 🔒 Bảo mật

- Mã hóa mật khẩu với bcrypt
- JWT tokens với access và refresh tokens
- HTTP-only cookies
- CORS configuration
- Input validation và sanitization
- Rate limiting (có thể thêm)

## 🚀 Deployment

### Heroku / Render / Railway

1. Tạo tài khoản và project mới
2. Kết nối với GitHub repository
3. Thêm biến môi trường
4. Deploy từ branch chính

### Vercel (Frontend) + Backend riêng

1. Deploy frontend lên Vercel
2. Deploy backend lên Render/Railway
3. Cập nhật API URLs trong frontend

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request.

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 License

Dự án này được phát hành dưới [ISC License](LICENSE).

## 👨‍💻 Tác giả

- **Repository**: [btl-ptpm](https://github.com/cuong912005/btl-ptpm)
- **Owner**: cuong912005

## 📞 Liên hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng tạo issue trên GitHub.

---

⭐ Nếu project này hữu ích, hãy cho một star nhé!
