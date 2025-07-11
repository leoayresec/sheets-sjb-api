import { selectAllSheetsManager, writeSheetsManagerDatabase } from "../database/database";
import { SheetManager as SheetManager } from "../models/sheet-manager-model";

export const findAllSheetsManager = async () => {
    const sheetManagerBelem: SheetManager[] = await selectAllSheetsManager();
    return sheetManagerBelem;
}

export const insertSheetManager = async(sheetManager: SheetManager) =>{
    const sheetsManager: SheetManager[] = await findAllSheetsManager();
    sheetsManager.push(sheetManager)
    await writeSheetsManagerDatabase(sheetsManager);
}