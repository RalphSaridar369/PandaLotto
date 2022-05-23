import { api } from './Api';

export const signup = async(data) =>{
    api
    .post('Account/Register',data)
    .then((res)=>console.log('res'))
}  