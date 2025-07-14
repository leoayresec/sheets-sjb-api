import { Router } from 'express';
import * as ManagerController from '../controllers/manager-controller';

const router = Router();

router.get('/manager', ManagerController.getManager);
router.get('/manager/:id', ManagerController.getManagerByid);
router.post('/manager', ManagerController.postManager);

export default router;
