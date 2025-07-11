import { Request, Response } from "express";
import { getStatusService } from "../services/status-service";

export const getStatus = async (req:Request, res: Response) =>{
    const response = await getStatusService();
    res.status(response.statusCode).json(response.body);
}