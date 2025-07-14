import { Manager } from "../models/manager-model";
import * as ManagerRepository from "../repositories/manager-repository";
import * as HttpResponse from "../utils/http-response";
export const getManagerService = async () =>{
    const data = await ManagerRepository.findAllManager();
    let response = null;
     if (data){
        response = await HttpResponse.ok(data);
     }
     else {
        response = await HttpResponse.noContent();
     }
    return response;
    
}

export const getManagerByIdService = async (id: number) =>{
    const data = await ManagerRepository.findManagerById(id);
    let response = null;
     if (data){
        response = await HttpResponse.ok(data);
     }
     else {
        response = await HttpResponse.noContent();
     }
    return response;
    
}

export const insertManagerService = async (manager: Manager) =>{
   let response = null;
   await ManagerRepository.insertManager(manager);
   response = await HttpResponse.ok({message: "Registro criado com sucesso"}); 
   return response;
}