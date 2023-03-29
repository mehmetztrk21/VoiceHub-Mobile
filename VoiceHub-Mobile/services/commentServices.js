import apiAxios from "../utils/apiAxios"

export const createComment = async (data) => {
    return await apiAxios.post("/comment/create", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => {
        return res.data;
    }).catch(err => { console.error(err, "Comment Create Services"); return null })
}

export const deleteComment = async (data) => {
    return await apiAxios.post("/comment/delete", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then(res => {
        return res.data;
    }).catch(err => { console.error(err, "Comment Delete Services"); return null })
}