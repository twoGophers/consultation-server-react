import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

// routes
import AuthRoute from './routes/AuthRoute.js';

// const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

mongoose.set('strictQuery', true);
mongoose
    .connect( 'mongodb+srv://admin:consultation@consultation.i47rtmp.mongodb.net/?retryWrites=true&w=majority')
    .then(() => app.listen( process.env.PORT || 5000 , () => console.log(`Listening at Port ${PORT}. Server Ok`)))
    .catch((err) => console.log(`${err} did not connect`))

//Path 
app.use('/auth', AuthRoute);