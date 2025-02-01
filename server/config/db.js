import mongoose, { connect } from "mongoose"

//Function to connect to the database

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB Database connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB