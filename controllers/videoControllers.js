
export const home = (req,res) => res.render("home", {pageTitle: "home", youngsu: 1234});
export const search = (req,res) => {
    // const searchingBy = req.query.term;
    const {query:{term: searchingBy}} = req;

    res.render("search", {pageTitle: "search", searchingBy: searchingBy})};
export const upload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const vidoeDetail = (req,res) => res.render("vidoeDetail", {pageTitle: "vidoeDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});
