const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
// require('dotenv').config()
const schema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        // require:true
    },
    tags:{
        type:String,
        // require:true
    },
    email:{
        type:String,
        // require:true
    }
})

schema.post("save",async (doc)=>{
        try{
            console.log("DOC OBJ IS",doc);
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                port: 587,
                secure: false,
                auth:{
                    user:process.env.MAIL_USER,
                    pass:process.env.MAIL_PWD
                }
            })

            let info = await transporter.sendMail({
                from:`codehelp by ken will`,
                to:doc.email,
                subject:`New file uploaded on cloudinary`,
                html:`<h2>Hello Jee</h2> <p>File Uploaded</p>
                    ${doc.imageUrl}
                    ${doc.name}    
                `
            })
            


        }catch(err){
            console.log(err.message)
            console.log(err);
        }
})

const file = mongoose.model("File",schema)
module.exports = file   