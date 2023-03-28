import apiAxios from "../utils/apiAxios"

export const createPost = async (data) => {
    return await apiAxios.post("/post/createPost", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }//dosya göndereceksen form-data göndermeteceksen apllication/json(yazmaya gerek yok)
    }).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const getMyPosts = async (data) => {
    return await apiAxios.post("/post/myPosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const getMainPagePosts = async (data) => {
    return await apiAxios.post("/post/mainPagePosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const getExplorePosts = async (data) => {
    return await apiAxios.post("/post/explorePosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const getSavedPosts = async (data) => {
    return await apiAxios.post("/post/savedPosts", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const setArchivePost = async (data) => {
    return await apiAxios.post("/action/archivePost", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const setNotArchivePost = async (data) => {
    return await apiAxios.post("/action/activatePost", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const setSavedPost = async (data) => {
    return await apiAxios.post("/action/save", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}

export const setLikedPost = async (data) => {
    return await apiAxios.post("/action/like", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services"); return null })
}