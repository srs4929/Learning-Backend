import mongoose from "mongoose"
import {db_name} from "../constants.js"

const connectdb=async ()=>{
    try{
       
        const connection=await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log(`MONGODB connected ${connection}`)
    }
    catch(error)
    {
      console.log("MONGODB connection error",error)
      process.exit(1)
    }
}
export default connectdb
