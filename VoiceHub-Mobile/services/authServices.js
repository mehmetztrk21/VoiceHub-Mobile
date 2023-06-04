import apiAxios from "../utils/apiAxios";

export const login = async (data) => {
    const res = await apiAxios.post("/auth/login", data, {
        headers: {
            "content-type": "application/json",
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err, "hata");
        return null
    }
    );
    return res;
}

export const register = async (data) => {
    const res = await apiAxios.post("/auth/register", data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }).then(res => {
        return res.data;
    }).catch(error => {
        console.log(error, "hata");
        return null;
    }
    );
    return res;
}

export const logout = async () => {
    const res = await apiAxios.get("/auth/logout", {
        headers: {
            "content-type": "application/json",
        }
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err, "hata");
        return null
    }
    );
    return res;
}