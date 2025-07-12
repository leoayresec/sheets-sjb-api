import {Request, Response} from 'express';
import * as SheetsManagerService from "../services/sheet-manager-service";
export const getSheetsManager = async (req: Request, res: Response) => {

    const response = await SheetsManagerService.getSheetsManagerService();
    res.status(response.statusCode).json(response.body);
}

export const getSheetManagerByid = async (req: Request, res: Response) => {
    const response = await SheetsManagerService.getSheetManagerByIdService(parseInt(req.params.id));
    res.status(response.statusCode).json(response.body);
}

export const postSheetsManager = async (req: Request, res: Response) => {
    const response = await SheetsManagerService.insertSheetManagerService(req.body);
    res.status(response.statusCode).json(response.body);
}