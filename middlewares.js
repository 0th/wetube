
import routes from './routes';
import multer from 'multer';

// app.use(multer({dest:'./uploads/'})
const multerVideo = multer({dest:"videos/"});

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};


export const uploadVideo = multerVideo.single('');

