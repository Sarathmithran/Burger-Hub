import axiosInstance from '../../services/api'

export const login = (payload) => axiosInstance.post('login', payload);
export const logout = () => axiosInstance.post('logout');
export const register = (payload) => axiosInstance.post('register', payload);
export const fetchUser = () => axiosInstance.get('user');
export const editUser = (payload) => axiosInstance.put('user/update', payload);