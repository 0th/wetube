const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const USER_DETAILS = "/:id";
const CHANGE_PASSWORD = "/change-password";


const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAILS = "/:id";
const EDIT_VIDEOS = "/:id/eidt";
const DELETE_VIDEO = "/:id/delete";


const routes = {
    home: HOME,
    join:  JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetails : USER_DETAILS,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetails: VIDEO_DETAILS,
    editVideos: EDIT_VIDEOS,
    deleteVideos: DELETE_VIDEO
}


export default routes;
