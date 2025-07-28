import axiosInstance from '../../services/api'

export const fetchCart = () => axiosInstance.get('cart');
export const addItem = (payload) => axiosInstance.post('cart/store', payload);
export const removeItem = (id) => axiosInstance.delete(`cart/remove/${id}`);