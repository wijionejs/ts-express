import express from 'express';
import cookieSession from "cookie-session";
import {AppRouter} from "./router";

import './controllers/LoginController';
import './controllers/IndexController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({ keys: ['key1'] }));

app.use(AppRouter.getInstance());


app.listen(3000, () => {
    console.log('Hello bro');
});
