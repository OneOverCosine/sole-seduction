import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";

dotenv.config();

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.get("/", (req, res) => {
    res.json("hello, this is the backend!");
});

app.get("/categories", (req, res) => {
    const q = "SELECT * FROM categories";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(process.env.PORT, () => {
    console.log("Connected to backend!");
});