import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";

// routes
import AuthRoute from './routes/AuthRoute.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.set('strictQuery', true);
mongoose
    .connect( 'mongodb+srv://admin:consultation@consultation.i47rtmp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Ok'))
    .catch((err) => console.log(`${err} did not connect`))

//Path 
app.use('/auth', AuthRoute);

app.listen( PORT || 5000, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Server OK');
  });