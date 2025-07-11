import fs from 'fs/promises'
import { SheetManager } from '../models/sheet-manager-model';

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
