import apiAxios from "../utils/apiAxios"

export const createPost = async (data) => {
    return await apiAxios.post("/post/createPost", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }//dosya göndereceksen form-data göndermeteceksen apllication/json
    }).then(res => {
        return res.data
    }).catch(err => {console.error(err, "Post Services"); return null})
}

export const getMyPosts = async(data)=>{
    return await apiAxios.post("/post/myPosts", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }//dosya göndereceksen form-data göndermeteceksen apllication/json
    }).then(res => {
        return res.data
    }).catch(err => {console.error(err, "Post Services"); return null})
} 