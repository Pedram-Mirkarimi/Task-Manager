# taskflow-api — Task Manager REST API (Learning Project)

> **Learning / practice project (Lern-/Übungsprojekt).**  
> Built to strengthen my fundamentals for an **Ausbildung as Fachinformatiker/in für Anwendungsentwicklung (FIAE)** (start: **ab 08/2026**).

A small REST API for task management to practice **CRUD**, **authentication**, and basic API structure with **Node.js / Express** and **MongoDB (Mongoose)**.

---

## ✅ What it does (core)
- User login (basic authentication)
- Create / read / update / delete tasks (CRUD)
- Simple filtering for tasks

<details>
<summary><b>More details (optional)</b></summary>

- Extra validations / small improvements done while practicing
- Additional endpoints used during learning

</details>

---

## 🧰 Tech (learning focus)
- Node.js, Express
- MongoDB (Mongoose)

---

## ▶️ Quick start

### Prerequisites
- Node.js installed
- MongoDB running locally (or a MongoDB connection string)

### Install
```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/taskflow
JWT_SECRET=change_me
```

### Run

```bash
npm start
```

### Dev mode (optional)

```bash
npm run dev
```

---

## 📌 Notes

* This is a **learning project** and not intended as a production-ready application.
* Do not commit secrets. Keep `.env` local.

---

## Author

Seyed AmirMohammad Mirkarimi
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
