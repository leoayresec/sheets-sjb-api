import { Router } from 'express';
import * as SheetsManagerController from '../controllers/sheets-manager-controller';

const router = Router();

router.get('/sheetsManager', SheetsManagerController.getSheetsManager);
router.post('/sheetsManager', SheetsManagerController.postSheetsManager);

export default router;
