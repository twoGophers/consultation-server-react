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

mongoose.set('strictQuery', true);
mongoose
    .connect( 'mongodb://127.0.0.1:27017/test')
    .then(() => app.listen( PORT || 5000 , () => console.log(`Listening at Port ${PORT}. Server Ok`)))
    .catch((err) => console.log(`${err} did not connect`))

//Path 
app.use('/auth', AuthRoute);