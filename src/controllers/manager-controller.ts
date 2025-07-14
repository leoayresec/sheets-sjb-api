import {Request, Response} from 'express';
import * as ManagerService from "../services/manager-service";
export const getManager = async (req: Request, res: Response) => {

    const response = await ManagerService.getManagerService();
    res.status(response.statusCode).json(response.body);
}

export const getManagerByid = async (req: Request, res: Response) => {
    const response = await ManagerService.getManagerByIdService(parseInt(req.params.id));
    res.status(response.statusCode).json(response.body);
}


export const postManager = async (req: Request, res: Response) => {
    const response = await ManagerService.insertManagerService(req.body);
    res.status(response.statusCode).json(response.body);
}