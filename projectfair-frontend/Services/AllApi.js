import { serverURL } from "./ServerURL";
import { commonAPI } from "./CommonAPI";

export const registerAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/api/register`,reqBody,'')
}
export const loginAPI=async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/api/login`,reqBody,'')
}
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/api/addProject`,reqBody,reqHeader)
}