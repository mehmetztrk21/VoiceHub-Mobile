import AsyncStorage from "@react-native-async-storage/async-storage";
import apiAxios from "../utils/apiAxios"

export const createPost = async (data) => {
    return await apiAxios.post("/post/createPost", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }//dosya göndereceksen form-data göndermeteceksen apllication/json(yazmaya gerek yok)
    }).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services post/createPost"); return null })
}

export const getUserInfo = async (data) => {
    return await apiAxios.post("/user/userById", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services user/userById"); return null })
}

export const getMyPosts = async (data) => {
    console.log(await AsyncStorage.getItem("token"),"dasjdaj");
    return await apiAxios.post("/post/myPosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services post/myPosts"); return null })
}

export const getMainPagePosts = async (data) => {
    return await apiAxios.post("/post/mainPagePosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services post/mainPagePosts"); return null })
}

export const getExplorePosts = async (data) => {
    return await apiAxios.post("/post/explorePosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services post/explorePosts"); return null })
}

export const getSavedPosts = async (data) => {
    return await apiAxios.post("/post/savedPosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services post/savedPosts"); return null })
}

export const setArchivePost = async (data) => {
    return await apiAxios.post("/action/archivePost", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/archivePost"); return null })
}

export const setNotArchivePost = async (data) => {
    return await apiAxios.post("/action/activatePost", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/activatePost"); return null })
}

export const setSavedPost = async (data) => {
    return await apiAxios.post("/action/save", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/save"); return null })
}

export const setLikedPost = async (data) => {
    return await apiAxios.post("/action/like", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/like"); return null })
}

export const setFollowFollower = async () => {
    return await apiAxios.post("/action/follow", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/follow"); return null })
}