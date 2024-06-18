const express = require('express')
const app = express();
require('dotenv').config()


// Middleware
app.use(express.json())
//for interacting with files by express express-fileupload
// Multer Can also be used
const fileUpload = require('express-fileupload')
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))


const PORT = process.env.PORT||4000


const ConnectDb = require('./config/database');
ConnectDb()

const cloudinary = require('./config/cloudinary')
cloudinary.cloudinaryConnect()

//Mounting
const Upload = require('./routes/fileUpload')
app.use('/api/v1/upload',Upload)

// 

app.listen(PORT,()=>{
    console.log(`Server Started At PORT ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("Here We go")
})