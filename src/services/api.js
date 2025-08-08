import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://burger-hub-api-0dnl.onrender.com/api/",
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

//Handle 401 Unauthorized globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Remove token
      localStorage.removeItem("token");
      // Remove user
      localStorage.removeItem("user");

      //redirect to login
      window.dispatchEvent(new Event("unauthorized")); // Dispatch event
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;