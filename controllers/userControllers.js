export const join = (req,res) => res.render("join",{pageTitle: "Join"});
export const login = (req,res) => res.render("login",{pageTitle:"Login"});
export const logout = (req,res) => res.render("logout",{pageTitle:"Logout"});
export const userDetails = (req,res) => res.render("userDetails", {pageTitle:"userDetails"});
export const editProfile = (req,res) => res.render("editProfile", {pageTitle:"editProfile"});
export const changePassword = (req,res) => res.render("changePassword",{pageTitle:"changePassword"} );
