import * as SheetManagerBelemRepository from "../repositories/sheet-manager-repository";
import * as HttpResponse from "../utils/http-response";
export const getSheetsManagerService = async () =>{
    const data = await SheetManagerBelemRepository.findAllSheetsManager();
    let response = null;
     if (data){
        response = await HttpResponse.ok(data);
     }
     else {
        response = await HttpResponse.noContent();
     }
    return response;
    
}