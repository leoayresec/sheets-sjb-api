
import express from 'express';
import cors from 'cors';
import statusRoutes from './routes/status-route';
import sheetManager from './routes/sheets-manager-route'
function createApp(){
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',[statusRoutes, sheetManager]);
return app;
}

export default createApp;