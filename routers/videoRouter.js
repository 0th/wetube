import express from "express";
import routes from '../routes';
import {
    getUpload,
    postUpload,
    videoDetail, 
    editVideo, 
    deleteVideo,
} from '../controllers/videoControllers';
import {uploadVideo} from '../middlewares';



const videoRouter = express.Router();



videoRouter.get(routes.upload, getUpload);
// videoRouter.post(routes.upload, postUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetails(), videoDetail );
videoRouter.get(routes.deleteVideos, deleteVideo);
videoRouter.get(routes.editVideos, editVideo);

export default videoRouter;
