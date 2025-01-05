import { axiosInstance } from "./axios";

// Example API call functions
export const login = (formData) => axiosInstance.post("/auth/login", formData);

export const fetchDashboardData = (apiUrl) => {
  return axiosInstance.get(apiUrl);
};
