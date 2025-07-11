import {Request, Response} from 'express';
import * as SheetsManagerService from "../services/sheet-manager-service";
export const getSheetsManager = async (req: Request, res: Response) => {

    const response = await SheetsManagerService.getSheetsManagerService();
    res.status(response.statusCode).json(response.body);
}