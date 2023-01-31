import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title : {type: String, required: true, trim: true, maxlength:20},
    descript : {type:String, required:true, trim: true, maxlength:100},
    createdAt : {type: Date, default:Date.now, required: true},
    hashtags : [{type: String, trim: true}],
    meta : {
        views : {type:Number, default:0,},
        rating : {type:Number, default:0,},
    },
});

videoSchema.static("formatHashtags", function (hashtags) {
    return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;