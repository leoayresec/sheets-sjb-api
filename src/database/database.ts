import fs from 'fs/promises'
import { SheetManager } from '../models/sheet-manager-model';
import { Manager } from '../models/manager-model';

export const selectAllSheetsManager= async()=>{
    const data = await fs.readFile('./src/database/sheet-manager.json', 'utf-8');
    const sheetManagerBelem: SheetManager[] = JSON.parse(data);
    return sheetManagerBelem;
;
}

export const writeSheetsManagerDatabase = async (sheetManager: SheetManager[]) =>{
     fs.writeFile('./src/database/sheet-manager.json',JSON.stringify(sheetManager,null,2));
    return sheetManager;
}

export const selectAllManager= async()=>{
    const data = await fs.readFile('./src/database/manager.json', 'utf-8');
    const managers: Manager[] = JSON.parse(data);
    return managers;
;
}

export const writeManagerDatabase = async (managers: Manager[]) =>{
     fs.writeFile('./src/database/manager.json',JSON.stringify(managers,null,2));
    return managers;
}