import axios from "axios"
import {API_URL} from "@env"
export const Login = async (username,password) => {
    return axios.post(API_URL+"/auth/login",{username:username,password:password}).then(res=>{
        if(res.data.status){
            localStorage.setItem("token",res.data.accessToken);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            return true;
        }
        else return true;  //TODO: return false
    }).catch(err=>{
        console.log(err);
        localStorage.setItem("user",JSON.stringify({
            username:"mehmet.ztrk",
            name:"Mehmet",
            surname:"Öztürk"
        }));  //TODO: Deleted.
        return true; //TODO: return false
    })
}