//1 importing axios
import axios from 'axios'
//2 configure the axios

export const commonAPI=async(httpMethod,url,reqBody,reqHeader)=>{
    const reqconfig={
        method:httpMethod,
        url:url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
    }

    return await axios(reqconfig).then((response)=>{
        return response
    })
    .catch((error)=>{
        return error
    })
}