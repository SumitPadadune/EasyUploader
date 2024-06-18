const mongoose = require('mongoose')
require('dotenv').config();
const ConnectDb = ()=>{
        mongoose.connect(process.env.DATABASE_URL).then(()=>{
                    console.log("Database connected")      
            }
        ).catch((error)=>{
            console.log("Not Connected")
            console.log(error)
            process.exit(1)
        })

}

module.exports = ConnectDb;