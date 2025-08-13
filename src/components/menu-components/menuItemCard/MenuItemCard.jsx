import React from 'react'
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartThunk';
import { toast } from 'react-toastify';

const MenuItemCard = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddToCart = async (item) => {
        const payload = {
            menu_id: item?.id,
            quantity: 1
        };

        try {
            await dispatch(addToCart(payload)).unwrap();
            toast.success('Item added to cart');
        } catch (error) {
            if (error?.status === 401) {
                toast.error('Login to your account');
                return;
            }
            toast.error('Failed to add item to cart');
        }
    };

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {items.map(item => (
            <div key={item.id} className="bg-white cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
            hover:-translate-y-1 border border-gray-200 overflow-hidden">
                <Link to={`/menu/${item.id}`}>
                    <figure className="relative overflow-hidden">
                    <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {item.popular && (
                        <div className="absolute top-3 left-3">
                        <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                        </div>
                        </div>
                    )}
                    <div className="absolute top-3 right-3">
                        <div className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {item.rating}
                        </div>
                    </div>
                    </figure>
                </Link>
                
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                        <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs capitalize">
                        {item.category.name}
                        </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-orange-500">
                        ${item.price}
                        </div>
                        
                        <button 
                        className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 text-sm font-medium"
                        onClick={() => handleAddToCart(item)}
                        >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                        </button>
                    </div>
                </div>
            </div>
        ))}
  </div>
);
};

export default MenuItemCard;