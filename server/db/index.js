import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

export const connectDB = async()=>{
  try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB Connected Sucessfully || DB_Host: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log(" MONGODB connection Failed: \n " , error);
    process.exit(1);
    // throw err; both does the same thing
  }
}