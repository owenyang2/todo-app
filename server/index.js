import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

// Middleware
app.use(cors()); // allows all origins by default
app.use(express.json()); // parse incoming json req.body

// Routes
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server stared on port 5000");
});