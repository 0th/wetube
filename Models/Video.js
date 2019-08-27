import mongoose from 'mongoose';


const VidoeSchema = mongoose.Schema({
    fileurl:{
        type: String,
        required: "File Url is required"
    },
    title:{
        type: String,
        required: "title is required"
    },
    description: String,
    views:{
        type:Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default:Date.now
    }

});

const model = mongoose.model("Video", VidoeSchema);
export default model;


