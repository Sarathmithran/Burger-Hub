import React, { useState } from 'react';
import { ShoppingCart, Clock, User, CreditCard, MapPin, Tag, Edit } from 'lucide-react';
import { useSelector } from 'react-redux';
import { calculateCartTotals } from '../../utils/calculateCartTotals';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [orderType, setOrderType] = useState('delivery');
  const { user } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.cart);

  const displayedItems = showAllItems ? cart : cart?.slice(0, 3);
  const { subtotal, tax, deliveryFee, total } = calculateCartTotals(cart, orderType);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="card bg-white shadow-sm">
                <div className="card-body">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className='flex gap-3'>
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                        </div>
                        <h2 className="card-title text-lg md:text-xl text-gray-700">Customer Information</h2>
                    </div>
                    <Link to={"/profile"}>
                        <Edit className="w-4 h-4 text-gray-500 cursor-pointer hover:text-orange-500" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-gray-700">Full Name *</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={user?.name}
                        className="input bg-white placeholder-gray-400 input-bordered border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-700"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-gray-700">Email *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user?.email}
                        className="input bg-white placeholder-gray-400 input-bordered border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-700"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium text-gray-700">Phone *</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={user?.phone}
                        className="input bg-white placeholder-gray-400 input-bordered border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-700"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="card bg-white shadow-sm">
                <div className="card-body">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className='flex gap-3'>
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <h2 className="card-title text-lg md:text-xl text-gray-700">Delivery Details</h2>  
                    </div>
                    <Link to={"/profile"}>
                        <Edit className="w-4 h-4 text-gray-500 cursor-pointer hover:text-orange-500" />
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="orderType"
                          value="delivery"
                          checked={orderType === 'delivery'}
                          onChange={(e) => setOrderType(e.target.value)}
                          className="radio text-orange-400"
                        />
                        <span className="text-gray-700">Delivery</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="orderType"
                          value="takeaway"
                          checked={orderType === 'takeaway'}
                          onChange={(e) => setOrderType(e.target.value)}
                          className="radio text-orange-400"
                        />
                        <span className="text-gray-700">Takeaway</span>
                      </label>
                    </div>

                    {orderType === 'delivery' && (
                      <div className="form-control mt-4">
                        <label className="label">
                          <span className="label-text font-medium text-gray-700 pb-1">Delivery Address *</span>
                        </label><br />
                        <textarea
                          name="deliveryAddress"
                          value={user?.address} 
                          className="input h-24 pt-2 bg-white placeholder-gray-400 input-bordered border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-gray-700"
                          placeholder="Enter your complete delivery address"
                          required
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <div className="card bg-white shadow-sm sticky top-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="card-title text-lg md:text-xl text-gray-700">Order Summary</h2>
                </div>

                {/* Order Items */}
                 <div className="space-y-3 mb-6">
                  {displayedItems?.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 border rounded-lg">
                      <Link to={`/menu/${item?.menu?.id}`} className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center text-lg">
                        <img src={item?.menu?.image} alt={item?.menu?.name} className="w-full h-full object-cover rounded-lg" />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/menu/${item?.menu?.id}`} className="font-semibold text-sm text-gray-800">
                            {item?.menu?.name}
                        </Link>
                        <div className="text-xs text-gray-600">Qty: {item?.menu?.quantity}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-orange-500">
                          ${item?.menu?.price}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {cart?.length > 3 && (
                    <button
                      onClick={() => setShowAllItems(!showAllItems)}
                      className="w-full cursor-pointer text-center text-sm text-orange-500 hover:text-orange-600 py-2 border border-orange-200 rounded-lg hover:bg-orange-50 transition-all duration-300 ease-in-out"
                    >
                      {showAllItems ? (
                        <>Show Less ↑</>
                      ) : (
                        <>Show {cart?.length - 3} More Items ↓</>
                      )}
                    </button>
                  )}
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="form-control flex-1">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="input bg-white input-bordered input-sm border-gray-300 focus:border-orange-500 text-gray-700"
                        placeholder="Promo code"
                      />
                    </div>
                    <button className="btn btn-sm bg-orange-400 border-none text-white">
                      <Tag className="w-4 h-4" />
                      Apply
                    </button>
                  </div>
                </div>

                {/* Order Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className={`text-green-600" ${deliveryFee === 0 || orderType === 'takeaway' ? 'text-green-600' : 'text-red-600'}`}>
                      {deliveryFee === 0 || orderType === 'takeaway' ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="divider my-2"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className='text-gray-700 text-lg'>Total</span>
                    <span className="text-orange-500">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Estimated delivery: 25-35 min</span>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-block bg-orange-500 border-none text-white font-semibold"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Place Order - ${total.toFixed(2)}
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;