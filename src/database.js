const mongoose = require('mongoose')

//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'
const MONGODB_URI = 'mongodb://localhost:27017/portfolio'
connection = async()=>{
    try {
         await mongoose.connect(MONGODB_URI)
        console.log("Database is connected")
    } catch (error) {
        console.log(error);
    }
}
const {DBUSER,DBPASSWORD,DBNAME} = process.env
//const MONGODB_URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.6e8zntc.mongodb.net/${DBNAME}`
module.exports = connection