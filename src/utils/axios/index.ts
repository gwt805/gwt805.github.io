import axios from "axios";

const http = axios.create();

http.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default http;