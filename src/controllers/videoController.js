import Video from "../models/Video";

export const home = async(req, res) => {
    const videos = await Video.find({}).sort({createdAt:"desc"});
     res.render("home", {pageTitle: "HOME", videos});

};
export const getEdit = async (req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    return res.render("edit", {pageTitle:"EDIT", video});
};
export const postEdit = async(req, res) => {
    const {id} = req.params;
    const {title, descript, hashtags} = req.body;
    const video = await Video.exists({_id : id});
    if(!video){
        return res.render("404", {pageTitle:"video not found"});
    }
    await Video.findByIdAndUpdate(id,{
        title,
        descript,
        hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
};
export const watch =async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle:"Video not found"});
    }
    return res.render("watch", {pageTitle:"WATCH", video});
};
export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle:" New Upload"});
};
export const postUpload = async (req, res) => {
    const {title, descript, hashtags} = req.body;
    try{
        await Video.create({
            title,
            descript,
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    }catch(error){
        return res.render("upload", {
            pageTitle:"New Upload",
            errorMessage:error._message
        });
    };
};

export const getDelete = async (req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    return res.redirect("/");
};

export const search = async (req,res) =>{
    const { keyword } = req.query;
    let videos = [];
    if(keyword){
        videos = await Video.find({
            title:{
                $regex: new RegExp(keyword, "i"),
            },
        });
    }
    return res.render("search", {pageTitle:"search", videos});
};