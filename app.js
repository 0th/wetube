
// const express = require('express')
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import globalRouter from './routers/globalRouter';
import helmet from "helmet";
import logger from "morgan";

import { localMiddleware } from "./middlewares";
import userRouter from './routers/userRouter';
import routes from './routes';
import videoRouter from './routers/videoRouter';


const app = express();


app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger("dev"));
app.use(helmet());
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;

