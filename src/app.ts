
import express, { Router } from 'express';
import cors from 'cors';
import statusRoutes from './routes/status-route';

function createApp(){
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',statusRoutes);
return app;
}

export default createApp;