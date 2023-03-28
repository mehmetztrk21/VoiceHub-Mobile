import axios from "axios";
import { toast } from "react-toastify";
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiAxios = axios.create({
    baseURL: "http://192.168.0.33:5000/"
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

apiAxios.interceptors.request.use(async (req) => {
    const token = await AsyncStorage.getItem("token") || ""
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

export default apiAxios