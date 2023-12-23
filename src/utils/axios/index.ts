import axios from "axios";

const http = axios.create();

http.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;