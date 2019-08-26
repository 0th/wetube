import routes from "../routes";

export const getJoin = (req,res) =>{
    res.render("join",{pageTitle: "Join"});
} 

export const postJoin = (req,res) => {
    
    const { body : {name, email, password, password2}} = req;
    if(password !== password2){
        res.status(400);
        res.render("join",{pageTitle: "Join"});
    }else{
        res.render(routes.home);
    }

}

export const login = (req,res) => res.render("login",{pageTitle:"Login"});
export const logout = (req,res) => res.render("logout",{pageTitle:"Logout"});
export const userDetails = (req,res) => res.render("userDetails", {pageTitle:"userDetails"});
export const editProfile = (req,res) => res.render("editProfile", {pageTitle:"editProfile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"changePassword"} );
