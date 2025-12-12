# ✅ Task Manager API

A powerful and secure RESTful API for a task management application, built with **Node.js**, **Express**, and **MongoDB**. This backend service provides a complete solution for user registration, authentication, and full CRUD (Create, Read, Update, Delete) functionality for tasks.

The API is designed to be the backbone of a modern task management web or mobile application, featuring JWT-based authentication, password encryption, file uploads, and automated email services.

---

## ✨ Key Features

- **Full User Authentication**: Secure user registration, login, and logout, with JSON Web Token (JWT) for session management.
- **Password Encryption**: User passwords are automatically hashed using `bcryptjs` before being saved to the database.
- **CRUD Operations for Tasks**: Full create, read, update, and delete functionality for user-specific tasks.
- **Data Filtering & Pagination**: Fetch tasks with filters (e.g., by completion status) and use pagination (limit/skip) for efficient data retrieval.
- **Data Sorting**: Sort tasks based on different criteria like creation date.
- **User Profile Management**: Users can read, update, and delete their own profiles.
- **Profile Picture Uploads**: Users can upload, view, and delete their profile avatars. Images are auto-formatted using the `sharp` library.
- **Automated Email Service**: Integrated with **SendGrid** to automatically send welcome and cancellation emails.
- **Environment-Based Configuration**: Easily manage keys and database URLs for different environments (development, production).

---

## 🛠️ Tech Stack

| Category              | Technology                      |
| --------------------- | ------------------------------- |
| **Backend Framework** | Express.js                      |
| **Database**          | MongoDB with Mongoose           |
| **Authentication**    | JSON Web Tokens (JWT), bcryptjs |
| **File Uploads**      | Multer                          |
| **Image Processing**  | Sharp                           |
| **Email Service**     | SendGrid (@sendgrid/mail)       |
| **Validation**        | validator.js                    |
| **Environment**       | Node.js                         |

---

## 📂 Project Structure

The API follows a modular structure for clean code and separation of concerns.

```
Task-Manager/
│
├── src/
│   ├── db/
│   │   └── mongoose.js       # MongoDB connection and configuration
│   ├── emails/
│   │   └── account.js        # SendGrid email functions
│   ├── middleware/
│   │   └── auth.js           # Authentication middleware for routes
│   ├── models/
│   │   ├── user.js           # User database model
│   │   └── task.js           # Task database model
│   ├── routers/
│   │   ├── user.js           # API routes for user operations
│   │   └── task.js           # API routes for task operations
│   └── index.js              # Main application entry point
│
└── package.json            # Project dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running
- A [SendGrid](https://sendgrid.com/) account and API Key

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Pedram-Mirkarimi/Task-Manager.git
    cd Task-Manager
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Create a configuration file:**
    Create a new file `config/dev.env`. This file will store your environment variables.

    ```
    PORT=3000
    JWT_SECRET=yourSuperSecretJwtString
    MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
    SENDGRID_API_KEY=yourSendGridApiKey
    ```

4.  **Start the server:**
    ```sh
    npm run dev
    ```
    The API will be live at `http://localhost:3000`.

---

## ⚙️ API Endpoints

All protected routes require an `Authorization` header with a `Bearer <JWT_TOKEN>`.

### User Endpoints

| Method   | Endpoint            | Description                            | Auth |
| -------- | ------------------- | -------------------------------------- | :--: |
| `POST`   | `/users`            | Register a new user.                   |  No  |
| `POST`   | `/users/login`      | Log in a user and return a JWT.        |  No  |
| `POST`   | `/users/logout`     | Log out from the current device.       | Yes  |
| `POST`   | `/users/logoutAll`  | Log out from all devices.              | Yes  |
| `GET`    | `/users/me`         | Get the profile of the logged-in user. | Yes  |
| `PATCH`  | `/users/me`         | Update the logged-in user's profile.   | Yes  |
| `DELETE` | `/users/me`         | Delete the logged-in user's account.   | Yes  |
| `POST`   | `/users/me/avatar`  | Upload a profile picture.              | Yes  |
| `DELETE` | `/users/me/avatar`  | Delete the profile picture.            | Yes  |
| `GET`    | `/users/:id/avatar` | Get a user's profile picture.          |  No  |

### Task Endpoints

| Method   | Endpoint     | Description                           | Auth |
| -------- | ------------ | ------------------------------------- | :--: |
| `POST`   | `/tasks`     | Create a new task.                    | Yes  |
| `GET`    | `/tasks`     | Get all tasks for the logged-in user. | Yes  |
| `GET`    | `/tasks/:id` | Get a specific task by its ID.        | Yes  |
| `PATCH`  | `/tasks/:id` | Update a specific task.               | Yes  |
| `DELETE` | `/tasks/:id` | Delete a specific task.               | Yes  |

#### Task Query Parameters

You can filter and paginate tasks using query strings on the `GET /tasks` endpoint:

- `?completed=true` or `?completed=false`
- `?limit=10&skip=0` (for pagination)
- `?sortBy=createdAt:desc` (or `asc`)

---
