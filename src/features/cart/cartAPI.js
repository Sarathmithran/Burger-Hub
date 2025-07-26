import axiosInstance from '../../services/api'

export const fetchCart = () => axiosInstance.post('cart');
export const addItem = (payload) => axiosInstance.post('cart/store', payload);