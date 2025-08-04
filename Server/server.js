import 'dotenv/config';
import cors from 'cors';
import express from 'express'
import ConnectDB from './DB/MongoDBConnect.js';
import adminRouter from './routes/adminRouter.js';
import blogRouter from './routes/blogRouter.js';

const app= express();

ConnectDB();

app.use(cors());
app.use(express.json());

app.use('/api/admin',adminRouter);
app.use('/api/blog',blogRouter);

const PORT= process.env.PORT || 3000;

app.get('/',(_,res)=>{
    res.send("API working")
})

app.listen(PORT,()=>{
    console.log(`start server on http://localhost:${PORT}`);
})