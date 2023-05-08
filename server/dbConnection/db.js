import mongoose from 'mongoose';

const connectDB = async (MONGO_URL) => {
    try {
        
        const DB_OPTION = {
            dbName: "E-commerce"
        }

       await mongoose.connect(MONGO_URL,DB_OPTION)
       console.log("Connected to Mongodb Database")
    } catch (error) {
        console.log(error) 
    }
}


export default connectDB