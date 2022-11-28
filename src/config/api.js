import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
});

api.defaults.headers.common["Authorization"] = sessionStorage.getItem("token")
    ? "Bearer " + sessionStorage.getItem("token")
    : "";

api.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (error) => {
        if (error && error.response) throw error.response;
        throw error;
    }
);
