import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // allows all origins by default
app.use(express.json()); // parse incoming json req

app.listen(5000, () => {
    console.log("Server stared on port 5000");
});