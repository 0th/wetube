import express from "express";
import routes from '../routes';
import { home, search } from "../controllers/videoControllers";
import { getLogin, postLogin, getJoin,postJoin,login, logout } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.join,getJoin);
globalRouter.post(routes.join,postJoin);
globalRouter.get(routes.login,getLogin);
globalRouter.post(routes.login,postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);



globalRouter.get(routes.logout,logout);

export default globalRouter;




