import express from 'express'
import morgan from 'morgan'
import authRoutes from "./routes/auth.routes.js";
import productRouters from './routes/products.routes.js';
import storeRouters from './routes/store.routes.js';
import cookieParser from 'cookie-parser'
import cors from 'cors';

const app = express();
app.use(morgan('dev'))
app.use(cors({
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use('/PQ/', authRoutes)
app.use('/PQ/', productRouters);
app.use('/PQ/', storeRouters);


export default app;