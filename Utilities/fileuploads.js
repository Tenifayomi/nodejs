const multer = require('multer')

// where to store the image

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "uploads")
    },
    filename: function(req,file,cb){
        cb(
            null,
            new Date().toDateString().replace(/:/g,"-")+"-" +file.originalname
        )
    },
})
// Specify file format that caan be saved
function fileFilter (req,file,cb){
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"]
    if(allowedMimeTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
};

const upload = multer({storage, fileFilter});

module.exports = {upload}