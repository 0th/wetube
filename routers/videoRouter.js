import express from "express";
import routes from '../routes';

const videoRouter = express.Router();


videoRouter.get(routes.videos, (req,res)=> res.send("here is videos"));
videoRouter.get(routes.video_details, (req,res)=> res.send("here is video_details"));
videoRouter.get(routes.upload, (req,res)=> res.send("here is upload"));
videoRouter.get(routes.delete_videos, (req,res)=> res.send("here is delete_videos"));
videoRouter.get(routes.edit_videos, (req,res)=> res.send("here is edit_videos"));



export default videoRouter;
