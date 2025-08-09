import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import ConnectDB from './DB/MongoDBConnect.js';
import adminRouter from './routes/adminRouter.js';
import blogRouter from './routes/blogRouter.js';
import cookieParser from 'cookie-parser';

const app = express();

// ✅ Connect to MongoDB
ConnectDB();

// ✅ Parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// ✅ Allow frontend to connect
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend
    credentials: true // Allow cookies/authorization headers
}));


// ✅ Routes
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// ✅ Default route
app.get('/', (_, res) => {
    res.send("API working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
