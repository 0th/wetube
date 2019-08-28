import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// console.log("come on!!!!!!");

mongoose.connect(
    process.env.MONGO_URL,{
    useNewUrlParser: true,
    useFindAndModify: false
    
});


const db = mongoose.connection;

const handleOpen = () => console.log( "***** Thumbs up  Connected to DB *****");
const handleError = () => console.log("***** Error *****");

db.once("open", handleOpen);
db.on("error", handleError);