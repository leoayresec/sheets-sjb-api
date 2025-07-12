import { selectAllSheetsManager, writeSheetsManagerDatabase } from "../database/database";
import { SheetManager as SheetManager } from "../models/sheet-manager-model";

export const findAllSheetsManager = async () => {
    const sheetManager: SheetManager[] = await selectAllSheetsManager();
    return sheetManager;
}

export const findSheetManagerById = async (id: number):Promise<SheetManager | undefined> => {
    const sheetManager: SheetManager[] = await selectAllSheetsManager();
    return sheetManager.find((manager) => manager.id===id);
}

export const insertSheetManager = async(sheetManager: SheetManager) =>{
    const sheetsManager: SheetManager[] = await findAllSheetsManager();
    sheetsManager.push(sheetManager)
    await writeSheetsManagerDatabase(sheetsManager);
}