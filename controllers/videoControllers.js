import {videos} from '../db';


export const home = (req,res) => res.render(
    "home", {pageTitle: "home", videos});

export const search = (req,res) => {
    const {query:{term: searchingBy}} = req;
    res.render("search", {pageTitle: "search", searchingBy: searchingBy})};
export const upload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});


