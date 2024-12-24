import express from 'express';
import signUp from '../Controllers/signUpController.js';

const SignUpRouter = express.Router();

SignUpRouter.post('/',signUp)

export default SignUpRouter;