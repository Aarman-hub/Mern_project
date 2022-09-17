import axios from axios;

const apiCall = async (method, path, data, jwt, params={})=>{
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json"
    };
    const baseUrl = "http://localhost:8000/api";
    const fullUrl = `${baseUrl}${path}`;

    if(method === "get" || method === "delete"){
        return axios[method](fullUrl, {headers, params});
    }else {
        return axios[method](fullUrl, data, {headers});
    }
};

export default {
    signUp: from => apiCall("post","/user/signup/", form),
    signIn: from => apiCall("post","/user/signin/", form),
}