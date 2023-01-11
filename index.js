import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
const app = express();

import http from "http";
import { Server } from "socket.io";

// routes
import AuthRoute from './routes/AuthRoute.js';
import QuestionRoute from './routes/QuestionRoute.js';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose
    .connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(`${err} did not connect`))

app.use(express.json());
app.use(express.static('avatar'));
app.use(express.static('public')); 
app.use('/images', express.static('images')); 
app.use(cors());


//Path 
app.use('/auth', AuthRoute);
app.use('/questions', QuestionRoute);

//Доступ к картинкам
app.use(express.static('public'));


const server = http.createServer(app);

server.listen( PORT || 5000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server OK');
});