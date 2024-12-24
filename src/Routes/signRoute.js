import express from 'express';
import signIn from '../Controllers/signInController.js';

// creating the sign in router
const SignInRoute = express.Router();

SignInRoute.post('/',signIn);

export default SignInRoute;