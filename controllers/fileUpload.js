const File = require('../models/File')
const cloudinary = require('cloudinary').v2;
exports.fileUpload = (req,res)=>{
    try{
        const file = req.files.file
        console.log("File is",file)
        // present working dir
        const path = __dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`
        console.log("Path ->",path)

        // call move fuction to move file to location REVISE
        file.mv(path,(err)=>{
            console.log(err)
        })
        res.json({
            sucess:true,
            message:"Local file uploaded Sucessfully"
        })
    }catch(err){
        console.log("2")
        console.log(err.message)
        res.json({
            sucess:False,
            message:"Local file Not Upload"
        })
    }
}

