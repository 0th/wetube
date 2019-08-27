import express from "express";
import routes from '../routes';
import { 
    users,
    userDetails,
    editProfile, 
    changePassword 
} from "../controllers/userControllers";


const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile );
userRouter.get(routes.changePassword,changePassword );
userRouter.get(routes.userDetails(), userDetails );


export default userRouter;
