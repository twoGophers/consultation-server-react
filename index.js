import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

// routes
import AuthRoute from './routes/AuthRoute.js';

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

app.get('/', (req, res) => res.send('Home Page Route'));
app.get('/about', (req, res) => res.send('About Page Route'));
app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));
app.get('/contact', (req, res) => res.send('Contact Page Route'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
app.use('/auth', AuthRoute);