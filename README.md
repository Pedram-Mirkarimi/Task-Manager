<h1 align="center">✅ Task Manager API</h1>

<p align="center">
  A powerful and secure <b>RESTful API</b> for task management, built with <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.
  Includes <b>JWT authentication</b>, <b>password hashing</b>, <b>task CRUD</b>, <b>filtering/pagination/sorting</b>,
  <b>avatar uploads</b>, and <b>automated emails</b> (SendGrid).
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-API-black?logo=express&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" />
  <img alt="JWT" src="https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens&logoColor=white" />
  <img alt="SendGrid" src="https://img.shields.io/badge/SendGrid-Email-00A4BD?logo=sendgrid&logoColor=white" />
  <img alt="Multer" src="https://img.shields.io/badge/Multer-Uploads-blue" />
  <img alt="Sharp" src="https://img.shields.io/badge/Sharp-Image%20Processing-6b7280" />
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-api-reference">API</a> •
  <a href="#-examples">Examples</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

---

## ✨ Features

- 🔐 **User Authentication**: Register / Login / Logout / Logout All using **JWT**
- 🔒 **Password Security**: Hashing with **bcryptjs**
- ✅ **Task CRUD**: Create, read, update, delete tasks (user-scoped)
- 🔎 **Filtering**: Query tasks by completion status
- 📄 **Pagination**: `limit` & `skip` for efficient listing
- ↕️ **Sorting**: `sortBy=createdAt:desc|asc`
- 👤 **Profile Management**: Read/update/delete your account
- 🖼️ **Avatar Uploads**: Upload/view/delete profile pictures with **multer** + **sharp**
- ✉️ **Automated Emails**: Welcome & cancellation emails via **SendGrid**
- 🧩 **Environment-based config**: Easily swap dev/prod values

---

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| API Framework | Express.js |
| Database | MongoDB + Mongoose |
| Auth & Security | JWT + bcryptjs |
| Uploads | Multer |
| Image Processing | Sharp |
| Emails | SendGrid (`@sendgrid/mail`) |
| Validation | validator.js |

---

## 🧱 Project Structure

```text
Task-Manager-API/
│
├── src/
│   ├── db/
│   │   └── mongoose.js        # MongoDB connection & config
│   ├── emails/
│   │   └── account.js         # SendGrid email helpers
│   ├── middleware/
│   │   └── auth.js            # JWT auth middleware
│   ├── models/
│   │   ├── user.js            # User model
│   │   └── task.js            # Task model
│   ├── routers/
│   │   ├── user.js            # User routes
│   │   └── task.js            # Task routes
│   └── index.js               # App entry point
│
├── package.json
└── README.md
````

---

## 🚀 Getting Started

### ✅ Prerequisites

* **Node.js** installed
* **MongoDB** installed and running (local) or MongoDB Atlas connection
* **SendGrid** account + API key (for email feature)

### 📥 Installation

```bash
git clone https://github.com/Pedram-Mirkarimi/Task-Manager-API.git
cd Task-Manager-API
npm install
```

### 🔐 Environment Variables

Create this file:

```text
config/dev.env
```

Add the following:

```env
PORT=3000
JWT_SECRET=yourSuperSecretJwtString
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
SENDGRID_API_KEY=yourSendGridApiKey
```

> Tip: Add `config/*.env` to `.gitignore` if it isn’t already, to avoid committing secrets.

### ▶️ Run

```bash
npm run dev
```

Server will be available at:

* `http://localhost:3000`

---

## ⚙️ API Reference

> For protected routes, include:
> `Authorization: Bearer <JWT_TOKEN>`

### 👤 User Endpoints

| Method | Endpoint            | Description                | Auth |
| ------ | ------------------- | -------------------------- | ---- |
| POST   | `/users`            | Register a new user        | ❌    |
| POST   | `/users/login`      | Login and return JWT       | ❌    |
| POST   | `/users/logout`     | Logout from current device | ✅    |
| POST   | `/users/logoutAll`  | Logout from all devices    | ✅    |
| GET    | `/users/me`         | Get logged-in user profile | ✅    |
| PATCH  | `/users/me`         | Update profile             | ✅    |
| DELETE | `/users/me`         | Delete account             | ✅    |
| POST   | `/users/me/avatar`  | Upload avatar              | ✅    |
| DELETE | `/users/me/avatar`  | Delete avatar              | ✅    |
| GET    | `/users/:id/avatar` | Get user avatar            | ❌    |

### ✅ Task Endpoints

| Method | Endpoint     | Description                   | Auth |
| ------ | ------------ | ----------------------------- | ---- |
| POST   | `/tasks`     | Create a new task             | ✅    |
| GET    | `/tasks`     | List tasks for logged-in user | ✅    |
| GET    | `/tasks/:id` | Get task by id                | ✅    |
| PATCH  | `/tasks/:id` | Update task                   | ✅    |
| DELETE | `/tasks/:id` | Delete task                   | ✅    |

### 🔍 Task Query Parameters (`GET /tasks`)

| Query       | Example                  | Description                 |
| ----------- | ------------------------ | --------------------------- |
| `completed` | `?completed=true`        | Filter by completion status |
| `limit`     | `?limit=10`              | Number of items to return   |
| `skip`      | `?skip=0`                | Offset for pagination       |
| `sortBy`    | `?sortBy=createdAt:desc` | Sort by field + direction   |

---

## 🧪 Examples

### 1) Register

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Pedram","email":"pedram@example.com","password":"MyPass123!"}'
```

### 2) Login (get token)

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"pedram@example.com","password":"MyPass123!"}'
```

### 3) Create a Task (authenticated)

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"description":"Finish README", "completed": false}'
```

### 4) List Tasks with filters + pagination + sort

```bash
curl "http://localhost:3000/tasks?completed=false&limit=10&skip=0&sortBy=createdAt:desc" \
  -H "Authorization: Bearer <JWT_TOKEN>"
```

### 5) Upload Avatar

```bash
curl -X POST http://localhost:3000/users/me/avatar \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -F avatar=@/path/to/avatar.jpg
```

---

## 🛡️ Notes & Best Practices

* Keep `JWT_SECRET` strong and private.
* Never commit `SENDGRID_API_KEY` or DB credentials.
* Consider rate limiting and request logging for production.

---

## 🛣️ Roadmap (Portfolio Upgrades)

* [ ] Add Swagger/OpenAPI docs (`/docs`)
* [ ] Add Postman collection + examples
* [ ] Add Dockerfile + docker-compose (Mongo + API)
* [ ] Add automated tests (Jest/Supertest)
* [ ] Add CI workflow (GitHub Actions)
* [ ] Deploy (Render/Railway/Fly.io) + add live base URL

---

## 👤 Author

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
