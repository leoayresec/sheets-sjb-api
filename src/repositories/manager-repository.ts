import { selectAllManager, writeManagerDatabase } from "../database/database";
import { Manager } from "../models/manager-model";

export const findAllManager = async () => {
    const sheetManager: Manager[] = await selectAllManager();
    return sheetManager;
}

export const findManagerById = async (id: number):Promise<Manager | undefined> => {
    const sheetManager: Manager[] = await findAllManager();
    return sheetManager.find((manager) => manager.id===id);
}

export const insertManager = async(sheetManager: Manager) =>{
    const sheetsManager: Manager[] = await findAllManager();
    sheetsManager.push(sheetManager)
    await writeManagerDatabase(sheetsManager);
}