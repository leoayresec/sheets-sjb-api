import fs from 'fs/promises'
import { SheetManager } from '../models/sheet-manager-model';

export const selectAllSheetsManager= async()=>{
    const data = await fs.readFile('./src/database/sheet-manager.json', 'utf-8');
    const sheetManagerBelem: SheetManager[] = JSON.parse(data);
    return sheetManagerBelem;
;
}