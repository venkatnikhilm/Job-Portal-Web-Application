import mongoose, { connect } from "mongoose"

//Function to connect to the database

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB Database connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB

// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`✅ MongoDB Connected: ${conn.connection.host}, Database: ${conn.connection.name}`);
//     } catch (error) {
//         console.error("❌ MongoDB connection failed:", error);
//         process.exit(1);
//     }
// };

// export default connectDB;