import apiAxios from "../utils/apiAxios";

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

export const setFollowFollower = async (data) => {
    return await apiAxios.post("/action/follow", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/follow"); return null })
}

export const setSeeLikes = async (data) => {
    return await apiAxios.post("/action/seeLikes", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/seeLikes"); return null })
}

export const blockAccount = async (data) => {
    return await apiAxios.post("/action/block", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/block"); return null })
}

export const deactivateAccount = async (data) => {
    return await apiAxios.post("/action/deactivateAccount", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/deactivateAccount"); return null })
}