import { statusOk } from "../utils/http-response"
export const getStatusService = async () =>{
    const response = await statusOk();
    return response;
}