import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175"],
  credentials: true
}));

const db = new sqlite3.Database("users.db");

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing fields" });

  const hashed = await bcrypt.hash(password, 10);

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (user) return res.status(400).json({ message: "Email already exists" });

    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashed],
      function (err) {
        if (err) return res.status(500).json({ message: "Database error" });
        return res.json({ success: true, message: "Signup successful" });
      }
    );
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing fields" });

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    return res.json({ success: true, message: "Login successful" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
