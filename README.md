# 🍜 Bhoko - Food Delivery Application

A full-stack food delivery web application built with React, Node.js, Express, and MongoDB. Features user authentication, shopping cart, Stripe payment integration, and an admin panel for managing food items.

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

---

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Stripe Integration Status](#-stripe-integration-status)
- [Contributing](#-contributing)

---

## ✨ Features

### Customer Features
- 🔐 User authentication (Register/Login with JWT)
- 🍕 Browse food menu by categories
- 🛒 Add/remove items from cart
- 📦 Place orders with delivery information
- 💳 Stripe payment integration (complete checkout flow)
- 📋 View order history and track orders

### Admin Features
- ➕ Add new food items with images
- 📋 View and manage food items list
- 🗑️ Remove food items
- 📦 View and manage all orders with status updates

---

## 📁 Project Structure

```
bhoko/
├── admin/                 # Admin Panel (React + Vite)
│   ├── src/
│   │   ├── components/    # Navbar, Sidebar
│   │   ├── pages/         # Add, List, Orders
│   │   └── assets/        # Static assets
│   └── package.json
│
├── backend/               # API Server (Node.js + Express)
│   ├── config/            # Database configuration
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── uploads/           # Uploaded images
│   ├── server.js          # Entry point
│   └── package.json
│
├── frontend/              # Customer App (React + Vite)
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── context/       # React Context (Global State)
│   │   ├── pages/         # Home, Cart, PlaceOrder, Verify, MyOrders
│   │   └── assets/        # Static assets
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend & Admin
- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Toast notifications (Admin)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File uploads
- **Stripe** - Payment processing
- **Validator** - Input validation
- **CORS** - Cross-origin resource sharing

---

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud) or local installation
- **Stripe Account** - [Stripe Dashboard](https://dashboard.stripe.com/) for API keys

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bhoko.git
cd bhoko
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Install Admin Panel Dependencies

```bash
cd ../admin
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bhoko?retryWrites=true&w=majority

# JWT Secret Key (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Stripe Secret Key (from Stripe Dashboard)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### How to get these values:

| Variable | Where to get it |
|----------|-----------------|
| `MONGODB_URI` | [MongoDB Atlas](https://cloud.mongodb.com/) → Create Cluster → Connect → Get Connection String |
| `JWT_SECRET` | Generate a random string (e.g., `openssl rand -hex 32`) |
| `STRIPE_SECRET_KEY` | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) → API Keys → Secret Key |

---

## 🏃 Running the Application

You need to run all three applications simultaneously:

### Terminal 1 - Backend Server

```bash
cd backend
npm run server
```
> Server runs on: `http://localhost:4000`

### Terminal 2 - Frontend (Customer App)

```bash
cd frontend
npm run dev
```
> App runs on: `http://localhost:5173`

### Terminal 3 - Admin Panel

```bash
cd admin
npm run dev
```
> Admin runs on: `http://localhost:5174` (or next available port)

---

## 📡 API Endpoints

### User Routes (`/api/user`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login user | No |

### Food Routes (`/api/food`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/list` | Get all food items | No |
| POST | `/add` | Add new food item | No |
| POST | `/remove` | Remove food item | No |

### Cart Routes (`/api/cart`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/add` | Add item to cart | Yes |
| POST | `/remove` | Remove item from cart | Yes |
| POST | `/get` | Get user's cart | Yes |

### Order Routes (`/api/order`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/place` | Place new order (creates Stripe session) | Yes |
| POST | `/verify` | Verify payment status | No |
| POST | `/userorders` | Get logged-in user's orders | Yes |
| GET | `/list` | Get all orders (admin) | No |
| POST | `/status` | Update order status (admin) | No |

### Static Files
| Endpoint | Description |
|----------|-------------|
| `/images/:filename` | Access uploaded images |

---

## 💳 Stripe Integration Status

> ✅ **Current Status: COMPLETE**

### ✅ Implemented Features
- Stripe SDK installed and configured in backend
- Checkout session creation with line items and delivery charges
- Redirect to Stripe checkout page
- Success/Cancel URL configuration
- Payment verification endpoint (`/api/order/verify`)
- Verify page component to handle Stripe callback
- Order history page for users (`/myorders`)
- Admin order management with status updates

### Payment Flow

1. User fills delivery information and clicks "Proceed to Payment"
2. Backend creates a Stripe checkout session with order details
3. User is redirected to Stripe's hosted checkout page
4. After payment, user is redirected to `/verify?success=true&orderId=xxx`
5. Verify page calls backend to confirm payment and update order status
6. User is redirected to "My Orders" page to view their order

### Testing Stripe Payments

Use these Stripe test card numbers:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Auth:** `4000 0025 0000 3155`

Use any future expiry date and any 3-digit CVC.

---

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,       // Required
  email: String,      // Required, Unique
  password: String,   // Required, Hashed
  cartData: Object    // Default: {}
}
```

### Food Model
```javascript
{
  name: String,        // Required
  description: String, // Required
  price: Number,       // Required
  image: String,       // Required
  category: String     // Required
}
```

### Order Model
```javascript
{
  userId: String,      // Required
  items: Array,        // Required
  amount: Number,      // Required
  address: Object,     // Required
  status: String,      // Default: "Food Processing"
  date: Date,          // Default: Date.now()
  payment: Boolean     // Default: false
}
```

---

## 🎨 Food Categories

The application supports the following food categories:
- Salad
- Rolls
- Desserts
- Sandwich
- Cake
- Pure Veg
- Pasta
- Noodles

---

## 📝 Available Scripts

### Backend
```bash
npm run server    # Start with nodemon (hot reload)
npm test          # Run tests (not configured)
```

### Frontend & Admin
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🔒 Authentication Flow

1. User registers with name, email, and password
2. Password is hashed using bcrypt (10 salt rounds)
3. JWT token is generated and returned
4. Token is stored in localStorage on frontend
5. Protected routes require token in request headers
6. Auth middleware verifies token and extracts userId

---

## 📸 Image Upload

- Food images are uploaded using Multer
- Images are stored in `backend/uploads/` directory
- Access images via: `http://localhost:4000/images/{filename}`
- Supported formats: All (no validation currently)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

## 👤 Author

**Pratyush**

---

## 🙏 Acknowledgments

- React and Vite teams for excellent developer experience
- MongoDB Atlas for free database hosting
- Stripe for payment processing APIs

