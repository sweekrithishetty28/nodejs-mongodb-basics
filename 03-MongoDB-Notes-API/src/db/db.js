const mongoose=require('mongoose');


async function connectDB() {
    await mongoose.connect("mongodb+srv://sweekrithi_shetty:qyC24ZhU6zFn6K7n@complete-backend.tcaepyt.mongodb.net/halley")
    console.log('Connected to MongoDB');
    
}
module.exports=connectDB;