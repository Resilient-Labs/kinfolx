import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'
configDotenv()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.error('Error connecting to db', err)
        process.exit(1)
    }
}
export default connectDB
