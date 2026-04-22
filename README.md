# 🟢 Node.js Learning Projects

A progressive series of Node.js projects — from a basic Express server to a full MongoDB-backed REST API.

---

## 📁 Project Structure

```
├── 01-Basic_of_Node/
│   └── server.js                  # Simple Express Hello World server
│
├── 02-Simple_Node_API/
│   ├── app.js                     # In-memory Notes CRUD API
│   └── server.js                  # Server entry point
│
├── 03-MongoDB-Notes-API/
│   ├── src/
│   │   ├── app.js                 # Express routes with Mongoose
│   │   ├── db/
│   │   │   └── db.js              # MongoDB connection
│   │   └── models/
│   │       └── note.model.js      # Mongoose Note schema
│   └── server.js                  # Server entry point
│
└── .gitignore
```

---

## 📦 Projects Overview

---

### 01 — Basic of Node
> A minimal Express server — the starting point.

**`server.js`**
- Creates an Express app
- Single `GET /` route that responds with `"HelloWorld"`
- Listens on **port 3000**

**Run:**
```bash
cd 01-Basic_of_Node
node server.js
```

---

### 02 — Simple Node API
> An in-memory Notes REST API using Express — no database required.

**Architecture:**
- `app.js` — defines all routes and exports the Express app
- `server.js` — imports `app` and starts the server on **port 3000**

**Notes are stored in a plain JavaScript array** (data resets on server restart).

**API Endpoints:**

| Method | Endpoint              | Description               |
|--------|-----------------------|---------------------------|
| POST   | `/notes`              | Create a new note         |
| GET    | `/getNotes`           | Retrieve all notes        |
| PATCH  | `/updateNote/:index`  | Update a note by index    |
| DELETE | `/deleteNote/:index`  | Delete a note by index    |

**Example Request — Create a Note:**
```json
POST /notes
{
  "title": "My Note",
  "description": "This is a note"
}
```

**Run:**
```bash
cd 02-Simple_Node_API
npm install
node server.js
```

---

### 03 — MongoDB Notes API
> A persistent Notes CRUD API using Express, Mongoose, and MongoDB Atlas.

**Architecture:**
- `server.js` — connects to MongoDB, then starts the server on **port 3000**
- `src/app.js` — all Express routes using async/await with Mongoose
- `src/db/db.js` — Mongoose connection to MongoDB Atlas
- `src/models/note.model.js` — Mongoose schema and model

**Note Schema:**
```js
{
  title: String,
  description: String
}
```

**API Endpoints:**

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/notes`             | Create a new note              |
| GET    | `/getNotes`          | Retrieve all notes             |
| PATCH  | `/updateNote/:id`    | Update a note by MongoDB `_id` |
| DELETE | `/deleteNote/:id`    | Delete a note by MongoDB `_id` |

**Example Request — Create a Note:**
```json
POST /notes
Content-Type: application/json

{
  "title": "Shopping List",
  "description": "Milk, Eggs, Bread"
}
```

**Example Response:**
```json
{
  "message": "Note created Successfully",
  "notes": {
    "_id": "64f1c...",
    "title": "Shopping List",
    "description": "Milk, Eggs, Bread",
    "__v": 0
  }
}
```

**Run:**
```bash
cd 03-MongoDB-Notes-API
npm install
node server.js
```

---

## ⚙️ Environment Setup

> ⚠️ **Important:** The MongoDB connection string in `db.js` contains credentials. Move them to a `.env` file before pushing to GitHub.

1. Install [dotenv](https://www.npmjs.com/package/dotenv):
```bash
npm install dotenv
```

2. Create a `.env` file in `03-MongoDB-Notes-API/`:
```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
```

3. Update `db.js`:
```js
require('dotenv').config();

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');
}
```

---

## 🛠️ Tech Stack

| Technology    | Purpose                  |
|---------------|--------------------------|
| Node.js       | Runtime environment      |
| Express.js    | Web framework            |
| MongoDB Atlas | Cloud database           |
| Mongoose      | MongoDB ODM              |
| dotenv        | Environment variables    |

---

## 📈 Learning Progression

```
01-Basic_of_Node       →   Hello World with Express
        ↓
02-Simple_Node_API     →   CRUD with in-memory array
        ↓
03-MongoDB-Notes-API   →   CRUD with persistent MongoDB storage
```

---

## 📝 License

This project is for educational purposes. Feel free to use and modify it.
