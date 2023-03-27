import apiAxios from "../utils/apiAxios";

export const login = async (data) => {
    const res = await apiAxios.post("/auth/login", data, {
        headers: {
            "content-type": "application/json",
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err,"hata");
        return null
    }
    );
    return res;
}