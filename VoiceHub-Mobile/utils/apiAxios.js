import axios from "axios";
import { toast } from "react-toastify";
const apiAxios = axios.create({
    baseURL: "http://10.0.2.2:5000"
})

apiAxios.interceptors.response.use((response) => response, (error) => {
    if (error?.response?.data?.message) {
        if (Array.isArray(error?.response?.data?.message)) toast.error(error.response.data.message?.join(",\n"))
        else toast.error(error.response.data.message)
    } else toast.error("Something went wrong")
    let unauthorized = error.response && error.response.status && (error.response.status == 401 || error.response.status == 403)
    if (unauthorized && !window.location.pathname.includes("/auth")) setTimeout(() => {
        window.location.replace(window.location.origin + "/auth/login")
    }, 1000)
    return Promise.reject(error);
});

apiAxios.interceptors.request.use((req) => {
    //local storage dan aldığın token i buraya koy.
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkNTIzNzE3ZjhlODBjYTViOGVkYjciLCJpYXQiOjE2Nzk3NDM4NjIsImV4cCI6NDgzNTUwMzg2Mn0.8Uvqr_gDIyfFBi-IcEAJwBS1h4jjgexGWNskK1-lqpQ"
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export default apiAxios