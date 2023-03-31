import AsyncStorage from "@react-native-async-storage/async-storage";
import apiAxios from "../utils/apiAxios";

export const getFollowers = async (data) => {
    return await apiAxios.post("/user/followers", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services user/followers"); return null })
}

export const getUserById = async (data) => {
    return await apiAxios.post("/user/getById", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services user/getById"); return null })
}

export const getFollowings = async (data) => {
    return await apiAxios.post("/user/followings", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services user/followings"); return null })
}

export const updateUserInfo = async (data) => {
    return await apiAxios.post("/user/update", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services user/update"); return null })
}