
import express from 'express';
import cors from 'cors';
import statusRoutes from './routes/status-route';
import sheetManagerRoutes from './routes/sheets-manager-route';
import managerRoutes from './routes/manager-route';
function createApp(){
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',[statusRoutes, sheetManagerRoutes, managerRoutes]);
return app;
}

export default createApp;