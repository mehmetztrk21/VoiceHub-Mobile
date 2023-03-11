import { API_URL } from "@env";
import axios from "axios";
import userPostData from "../screens/components/userPostData";
export const PostsList = async () => {
    return axios.get(API_URL + "/posts", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token") || "" //TODO: token check
        }
    }).then(r => { return r.data }).catch(err => {
        console.log(err);
        return { list: [...userPostData], status: true } //TODO:false
    });
}