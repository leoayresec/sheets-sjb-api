import { SheetManager } from "../models/sheet-manager-model";
import * as SheetManagerRepository from "../repositories/sheet-manager-repository";
import * as HttpResponse from "../utils/http-response";
export const getSheetsManagerService = async () =>{
    const data = await SheetManagerRepository.findAllSheetsManager();
    let response = null;
     if (data){
        response = await HttpResponse.ok(data);
     }
     else {
        response = await HttpResponse.noContent();
     }
    return response;
    
}

export const getSheetManagerByIdService = async (id: number) =>{
    const data = await SheetManagerRepository.findSheetManagerById(id);
    let response = null;
     if (data){
        response = await HttpResponse.ok(data);
     }
     else {
        response = await HttpResponse.noContent();
     }
    return response;
    
}

export const insertSheetManagerService = async (sheetManager: SheetManager) =>{
   let response = null;
   await SheetManagerRepository.insertSheetManager(sheetManager);
   response = await HttpResponse.ok({message: "Registro criado com sucesso"}); 
   return response;
}