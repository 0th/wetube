import routes from '../routes';
import Video from '../Models/Video';



export const home = async(req,res) => {

        try{
                const videos = await Video.find({});
                throw Error("vidoe controller error");
                res.render("home", {pageTitle: "home", videos});
                
        }catch(error){
                console.log(error);
                res.render("home", {pageTitle: "home", videos: []});
        }
   
    }


export const search = (req,res) => {
    const {query:{term: searchingBy}} = req;
    res.render("search", {pageTitle: "search", searchingBy: searchingBy})};

export const getUpload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const postUpload = (req,res) => {
    // const { body: { title, description },
    // file: { path }
    // } = req;

    // const { body :{file,title, description}} = req;
    // console.dir(file,title,description);
    res.redirect(routes.home);

    // console.log("post upload ing...");
    // const newVideo = await Video.create({
    //     fileUrl: path,
    //     title,
    //     description
    // });
    // res.redirect(routes.videoDetails(newVideo.id));

}

export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render


("deleteVideo", {pageTitle: "deleteVideo"});


