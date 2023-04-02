import apiAxios from "../utils/apiAxios";

{/* Archive */ }
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
{/* Archive End */ }



{/* Save */ }
export const setSavedPost = async (data) => {
    return await apiAxios.post("/action/save", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/save"); return null })
}
{/* Save End */ }



{/* Like */ }
export const setLikedPost = async (data) => {
    return await apiAxios.post("/action/like", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/like"); return null })
}
{/* Like End */ }



{/* Follow End */ }
export const setFollowFollower = async () => {
    return await apiAxios.post("/action/follow", data
    ).then(res => {
        return res.data
    }).catch(err => { console.error(err, "Post Services action/follow"); return null })
}
{/* Follow End */ }