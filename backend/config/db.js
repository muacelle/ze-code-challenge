import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.CONNECTIONSTRING)
        console.log(`MongoDB Connected: ${connect.connection.host}`)

    } catch (error) {

        console.log(error)
        process.exit(1)

    }
}

export default connectDB