import React, { useEffect } from 'react';
import { Star, Clock, User, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCart, removeFromCart } from '../../features/cart/cartThunk';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCart());
      }, [dispatch]);

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    const payload = {
        menu_id: id,
        quantity
    };

    try{
        await dispatch(addToCart(payload)).unwrap();
        toast.success('Item updated successfully');
        dispatch(getCart());
    }
    catch{
        toast.error('Failed to update item quantity');
    }
  };

  const removeItem = async (id) => {
    try{
        await dispatch(removeFromCart(id)).unwrap();
        toast.success('Item removed successfully');
        dispatch(getCart());
    }
    catch{
        toast.error('Failed to remove item');
    }
  };

//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const tax = subtotal * 0.08;
//   const deliveryFee = 2.99;
//   const total = subtotal + tax + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 pt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">Review your order before checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart Items ({cart?.length})
              </h2>

              <div className="space-y-6">
                {cart?.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item?.menu?.image} 
                          alt={item?.menu?.name}
                          className="w-full sm:w-24 h-24 object-cover rounded-xl"
                        />
                        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            -10%
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 truncate">{item?.menu?.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item?.menu?.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                <span>{item?.menu?.rating}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>10-15 min</span>
                              </div>
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                <span>1 person</span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-orange-500">${item?.menu?.price}</span>
                              <span className="text-gray-400 line-through">${item?.menu?.price * 2}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end sm:flex-col sm:items-end space-y-3">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => updateQuantity(item.menu_id, item.quantity - 1)}
                                className="text-gray-950 cursor-pointer w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-medium text-lg w-8 text-center text-gray-600">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.menu_id, item.quantity + 1)}
                                className="text-gray-950 cursor-pointer w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 cursor-pointer p-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {cart?.length === 0 && (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some delicious burgers to get started!</p>
                  <Link to="/menu" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                    Browse Menu
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  {/* <span className="font-medium text-gray-600">${subtotal.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  {/* <span className="font-medium text-gray-600">${tax.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  {/* <span className="font-medium text-gray-600">${deliveryFee.toFixed(2)}</span> */}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-600">Total</span>
                    {/* <span className="text-xl font-bold text-orange-500">${total.toFixed(2)}</span> */}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="text-gray-600 flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <button className="cursor-pointer px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                    Apply
                  </button>
                </div>
              </div>

              <button 
                className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                disabled={cart?.length === 0}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="inline-flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Estimated delivery: 25-35 min
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  Free delivery on orders over $25
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;