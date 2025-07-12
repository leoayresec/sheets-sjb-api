import { Router } from 'express';
import * as SheetsManagerController from '../controllers/sheets-manager-controller';

const router = Router();

router.get('/sheetsManager', SheetsManagerController.getSheetsManager);
router.get('/sheetsManager/:id', SheetsManagerController.getSheetManagerByid);
router.get('/sheetsManager/week/:week', SheetsManagerController.getSheetManagerByWeek);

router.post('/sheetsManager', SheetsManagerController.postSheetsManager);

export default router;
