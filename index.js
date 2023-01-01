import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();


// mongoose.set('strictQuery', true);
mongoose
    .connect( 'mongodb+srv://admin:chat@chat.f3sr6wb.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(`${err} did not connect`))

// routes
import AuthRoute from './routes/AuthRoute.js';

// const MONGODB_URI = process.env.MONGODB_URI;
// const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

//Path 
app.use('/auth', AuthRoute);