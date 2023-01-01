import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

// routes
import AuthRoute from './routes/AuthRoute.js';

const CONNECTION = process.env.MONGODB_CONNECTION;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static('avatar'));
app.use(cors());

//Path 
app.use('/auth', AuthRoute);

mongoose.set('strictQuery', true);
mongoose
    .connect( CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen( PORT || 5000 , () => console.log(`Listening at Port ${PORT}. Server Ok`)))
    .catch((err) => console.log(`${err} did not connect`))
