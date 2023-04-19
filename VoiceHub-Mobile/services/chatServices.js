import apiAxios from "../utils/apiAxios"

export const deleteChat = async (data) => {
    return await apiAxios.post("/chat/delete", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services chat/delete");
        return null;
    })
}

export const deleteMessage = async (data) => {
    return await apiAxios.post("/chat/deleteMessage", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services chat/deleteMessage");
        return null;
    })
}