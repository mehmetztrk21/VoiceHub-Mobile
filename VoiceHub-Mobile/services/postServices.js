import apiAxios from "../utils/apiAxios"

export const createPost = async (data) => {
    return await apiAxios.post("/post/createPost", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }//dosya göndereceksen form-data göndermeteceksen apllication/json yazılır. (application/json yazmaya gerek yok)
    }).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services post/createPost");
        return null
    })
}

export const getMyPosts = async (data) => {
    return await apiAxios.post("/post/myPosts", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services post/myPosts");
        return null
    })
}

export const getMainPagePosts = async (data) => {
    return await apiAxios.post("/post/mainPagePosts", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services post/mainPagePosts");
        return null
    })
}

export const getExplorePosts = async (data) => {
    return await apiAxios.post("/post/explorePosts", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services post/explorePosts");
        return null
    })
}

export const getTopCategories = async () => {
    return await apiAxios.post("/post/top20Tags"
    ).then(res => {
        return res.data  //{success:true,message:"success",data:[{_id:"poem",count:3}]}
    }).catch(err => {
        console.error(err, "Post Services post/myPosts");
        return null
    })
}

export const getSavedPosts = async (data) => {
    return await apiAxios.post("/post/savedPosts", data
    ).then(res => {
        return res.data
    }).catch(err => {
        console.error(err, "Post Services post/savedPosts");
        return null
    })
}



