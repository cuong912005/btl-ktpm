# Kong API Gateway Configuration

## Overview

Kong acts as the single entry point for all microservices. All frontend requests go through Kong at `http://localhost:8000`.

## Routes Configured

| Route | Target Service | Port |
|-------|---------------|------|
| `/api/auth/*` | auth-service | 3001 |
| `/api/products/*` | product-service | 3002 |
| `/api/payments/*` | payment-service | 3003 |
| `/api/cart/*` | cart-service | 3004 |
| `/api/orders/*` | order-service | 3005 |
| `/api/analytics/*` | analytics-service | 3007 |
| `/api/coupons/*` | coupon-service | 3008 |

## Plugins Enabled

### 1. CORS Plugin
**Purpose**: Enable cross-origin requests from frontend

**Configuration**:
- Allowed origins: `localhost:5173`, `localhost:3000`, `localhost:5000`
- Allowed methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
- Credentials: Enabled
- Max age: 3600 seconds

### 2. Rate Limiting Plugin
**Purpose**: Prevent API abuse

**Configuration**:
- Limit: 100 requests per minute per consumer
- Policy: Local (in-memory)
- Fault tolerant: Yes

### 3. Request Size Limiting Plugin
**Purpose**: Prevent large file uploads

**Configuration**:
- Max payload size: 10 MB
- Applied to all routes

### 4. File Log Plugin
**Purpose**: Request/response logging

**Configuration**:
- Log path: `/tmp/kong-requests.log`

## Kong Admin Endpoints

- **Proxy**: http://localhost:8000 (main API gateway)
- **Admin API**: http://localhost:8001 (REST API for configuration)
- **Kong Manager**: http://localhost:8002 (GUI dashboard)

## Usage Examples

### Frontend API Calls

```javascript
// Old monolith
axios.get('http://localhost:5000/api/auth/profile')

// New microservices via Kong
axios.get('http://localhost:8000/api/auth/profile')
```

### Testing Routes

```bash
# Test Auth Service
curl http://localhost:8000/api/auth/profile

# Test Product Service
curl http://localhost:8000/api/products

# Test Cart Service
curl http://localhost:8000/api/cart/:userId
```

### Verify Kong Configuration

```bash
# List all services
curl http://localhost:8001/services

# List all routes
curl http://localhost:8001/routes

# List all plugins
curl http://localhost:8001/plugins
```

## Configuration File

The Kong configuration is defined in `kong.yml` (declarative format). Any changes to this file require Kong restart:

```bash
docker-compose restart kong
```

## Troubleshooting

### Kong not starting
1. Check if PostgreSQL is healthy: `docker-compose ps kong-database`
2. Check Kong logs: `docker logs kong`
3. Verify kong.yml syntax is valid

### Routes not working
1. Verify service is running: `docker-compose ps`
2. Check Kong routes: `curl http://localhost:8001/routes`
3. Test direct service connection: `curl http://localhost:3001/health`

### CORS errors
1. Verify frontend origin is in kong.yml CORS config
2. Check browser console for exact error
3. Ensure credentials are properly sent from frontend

## Rate Limiting Details

- **Limit**: 100 requests/minute per IP/consumer
- **Response Headers**:
  - `X-RateLimit-Remaining-Minute`: Requests left
  - `X-RateLimit-Limit-Minute`: Total limit
- **Exceeded Response**: HTTP 429 Too Many Requests

## Next Steps (Story 1.3)

After Kong is configured, implement Kafka topics initialization for async messaging.
