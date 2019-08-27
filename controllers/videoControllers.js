// import {videos} from '../db';
import routes from '../routes';

export const home = (req,res) => res.render(
    "home", {pageTitle: "home", videos});

export const search = (req,res) => {
    const {query:{term: searchingBy}} = req;
    res.render("search", {pageTitle: "search", searchingBy: searchingBy})};

export const getUpload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const postUpload = (req,res) => {
    const {
        body: {file, title, description}
    } = req;
    // res.redirect(routes.videoDetails(78910));
    res.redirect(routes.videoDetails(324393));

}

export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});


