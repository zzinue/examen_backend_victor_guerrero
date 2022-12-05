const mongoose= require('mongoose')

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL,{

        })
        console.log(`MongoDB Connected Succesfuly`);
    } catch (error) {
        console.error(`Error while connecting Database: ${error}`);
        process.exit()
    }
}
module.exports= connectDB