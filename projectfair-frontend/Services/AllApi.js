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
export const homeProjectAPI=async()=>{
    return await commonAPI("get",`${serverURL}/api/getHomeProject`,"","")
}
export const getAllUserProjectAPI=async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/api/getAllUserProject`,"",reqHeader)
}
export const getUserProjectAPI=async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/api/getAUserProject`,"",reqHeader)
}
export const editProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/api/editProject/${projectId}`,reqBody,reqHeader)
}