
const mongoose =require( "mongoose");

const connectDB =  async() =>{
    console.log("in connect db function");
    try{
        const conn = await mongoose.connect(`mongodb://0.0.0.0:27017/herogram` );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.log(err.message);
        process.exit();
    }
}
module.exports = connectDB;