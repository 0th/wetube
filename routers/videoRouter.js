import express from "express";
import routes from '../routes';
import {
    upload,
    videoDetail, 
    editVideo, 
    deleteVideo
} from '../controllers/videoControllers';

const videoRouter = express.Router();



videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetails, videoDetail );
videoRouter.get(routes.deleteVideos, deleteVideo);
videoRouter.get(routes.editVideos, editVideo);

export default videoRouter;
