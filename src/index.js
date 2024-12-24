import express from 'express';
import connectDB from './Config/dbConfig.js';
import { FRONTEND_URL, PORT } from './Config/serverConfig.js';
import SignInRoute from './Routes/signRoute.js';
import SignUpRouter from './Routes/signUpRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

app.use(cors({
    origin : FRONTEND_URL, // allow server to accept the request from differnt origin
    credentials: true, //allow session cookie from browser to pass through
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.use('/login', SignInRoute);
app.use('/signup',SignUpRouter);

app.listen(PORT,()=>{
    console.log("Server has been started on port",PORT);
    connectDB();
});