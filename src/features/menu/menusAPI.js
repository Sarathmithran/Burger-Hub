import axiosInstance from '../../services/api'

export const getMenus = (payload) => axiosInstance.get('menus', payload);