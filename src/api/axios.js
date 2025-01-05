import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Update this to your backend's base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor for attaching the JWT token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { axiosInstance }; // Exporting axiosInstance
