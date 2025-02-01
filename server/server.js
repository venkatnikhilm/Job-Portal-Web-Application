import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

//Initialize express
const app = express();

//Connect to MongoDB
await connectDB()

//Middlewares   
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => res.send('API Working'))

//Port

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));