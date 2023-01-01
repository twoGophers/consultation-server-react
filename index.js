import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import AuthRoute from './routes/AuthRoute.js';
dotenv.config();


mongoose.set('strictQuery', true);
mongoose
    .connect( 'mongodb+srv://admin:consultation@consultation.i47rtmp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(`${err} did not connect`))

// routes

// const MONGODB_URI = process.env.MONGODB_URI;
// const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

//Path 
app.use('/auth', AuthRoute);

app.listen( process.env.PORT || 5000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server OK');
  });