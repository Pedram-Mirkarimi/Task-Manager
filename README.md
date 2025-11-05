# ✅ Task Manager
A modern and simple **Task Management Web Application** built with **Node.js**, **Express**, and **MongoDB** 🚀  

### ✨ Features
✅ Create Tasks  
✅ Edit Tasks  
✅ Delete Tasks  
✅ List All Tasks  
✅ Secure User Authentication using JWT 🔐  
✅ MongoDB Database using Mongoose  

---

## 🧱 Project Structure

```
Task-Manager/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── package.json
├── .env (ignored)
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Description |
|-----------|-------------|
| ⚡ Node.js | Backend runtime |
| 🌐 Express | Routing & API layer |
| 🗄️ MongoDB | NoSQL database |
| 🧩 Mongoose | ODM for MongoDB |
| 🔑 JWT | Authentication |

---

## 📦 Installation

```bash
npm install
```

📌 Create `.env` file with the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Run Application

```bash
npm start
```

Development mode (auto-reload):
```bash
npm run dev
```

Open in browser:  
👉 http://localhost:3000/

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user 👤 |
| POST | /api/auth/login | Login user & get token 🔐 |
| GET | /api/tasks | Get all tasks 📋 |
| POST | /api/tasks | Add new task ➕ |
| PUT | /api/tasks/:id | Update task ✏️ |
| DELETE | /api/tasks/:id | Delete task 🗑️ |

---

## 📝 Notes

🔹 Hash passwords using bcrypt  
🔹 Never push `.env` files to GitHub  
🔹 Add `.env.example` for better collaboration  
🔹 API should be used with `Authorization: Bearer <token>` header  

---

## 🚀 Future Improvements

- ✅ Pagination support
- ✅ Task category / priority
- ✅ Dark / light UI theme
- ✅ Profile & user settings

---

### 👨‍💻 Developer
Created by: **Pedram Mirkarimi!** ✨
