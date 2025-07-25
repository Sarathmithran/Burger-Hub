import axiosInstance from '../../services/api'

export const getMenus = () => axiosInstance.get('menus');
export const getBurgersMenus = () => axiosInstance.get('menus?category=burgers');
export const getMenuDetails = (id) => axiosInstance.get(`menus/${id}`);