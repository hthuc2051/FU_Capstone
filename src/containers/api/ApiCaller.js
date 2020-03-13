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

    //   }
    let result = null;
    try {
        if (Constant.END_POINT_EVENTS === endpoint) {
            headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
            };
            result = await axios({
                method: method,
                url: `${Constant.API_URL}/${endpoint}/${body}`,
                data: body,
                headers: headers
            })
        } else if (Constant.END_POINT_POST_TESTSCRIPT === endpoint) {
            console.log(body);
            headers = { 'Content-Type': 'multipart/form-data' }
            result = await axios({
                method: method,
                url: `${Constant.API_URL}/${endpoint}`,
                data: body,
                headers: headers
            })
        }
        else {
            headers = { 'Content-Type': 'application/json' }
            result = await axios({
                method: method,
                url: `${Constant.API_URL}/${endpoint}`,
                data: body,
                headers: headers
            })
        }
    } catch (err) {
        result = err.response;
    }
    console.log(result);
    return result;
}
