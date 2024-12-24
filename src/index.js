import express from 'express';
import connectDB from './Config/dbConfig.js';
import { PORT } from './Config/serverConfig.js';
import SignInRoute from './Routes/signRoute.js';
import SignUpRouter from './Routes/signUpRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.use('/login', SignInRoute);
app.use('/signup',SignUpRouter);

app.listen(PORT,()=>{
    console.log("Server has been started on port",PORT);
    connectDB();
});