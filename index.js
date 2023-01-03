import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";

// routes
import AuthRoute from './routes/AuthRoute.js';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose
    .connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(`${err} did not connect`))

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use(cors());

//Path 
app.use('/auth', AuthRoute);

app.listen( PORT || 5000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server OK');
  });