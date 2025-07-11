import { selectAllSheetsManager as selectAllSheetsManager } from "../database/database";
import { SheetManager as SheetManager } from "../models/sheet-manager-model";

export const findAllSheetsManager = async () => {
    const sheetManagerBelem: SheetManager[] = await selectAllSheetsManager();
    return sheetManagerBelem;
}