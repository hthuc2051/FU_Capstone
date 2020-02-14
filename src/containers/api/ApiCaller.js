import axios from "axios";
import * as Constant from '../constants';
export default async function callApi(endpoint, method = "GET", body, headerType) {
    //   const token = localStorage.getItem("USER");
       let headers = {}
    //   if (headerType === 'ADMIN') {
    //     headers = { 'Authorization': token }
    //   } else if (headerType === 'FILE') {
        // headers = { 'Authorization': token, 'Content-Type': 'multipart/form-data' }
        // headers = {'Content-Type': 'multipart/form-data' }
    //   } else if (headerType === 'LOGIN') {
        headers = { 'Content-Type': 'application/json' }
    //   }
    let result = null;
    try {
        console.log(body);
        result = await axios({
            method: method,
            url: `${Constant.API_URL_DUMMY}/${endpoint}`,
            data: body,
            headers : headers
        })
    } catch (err) {
        result = err.response;
    }
    return result;
}
