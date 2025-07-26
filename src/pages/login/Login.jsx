import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import { loginUser, registerUser } from '../../features/auth/authThunk';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const dispatch = useDispatch();
const { loading, error } = useSelector(state => state.auth);

const handleSubmit = (e) => {
  e.preventDefault();

  if (isLogin) {
    dispatch(loginUser({ email: formData.email, password: formData.password }));
  } else {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword,
    }));
  }
};

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-white to-gray-900 flex items-center justify-center pt-25 md:pt-30 pb-15">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl md:shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-center border-b-4 border-orange-300">
            <div className="w-15 h-15 p-2 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <img src={logo} alt='logo'/>
            </div>
            <p className="text-gray-200 text-sm">
              {isLogin ? 'Welcome back!' : 'Join our delicious community'}
            </p>
          </div>

          {/* Form */}
          <div className="px-6 py-8">
            {/* Custom Tab System with Animation */}
            <div className="relative bg-gray-100 rounded-xl p-1 mb-6">
              <div 
                className={`absolute top-1 bottom-1 bg-orange-600 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                  isLogin ? 'left-1 right-1/2 mr-0.5' : 'right-1 left-1/2 ml-0.5'
                }`}
              ></div>
              <div className="relative flex">
                <button 
                  className={`flex-1 cursor-pointer py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isLogin ? 'text-white z-10' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => toggleMode()}
                >
                  Login
                </button>
                <button 
                  className={`flex-1 cursor-pointer py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                    !isLogin ? 'text-white z-10' : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => toggleMode()}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Form Content with Animation */}
            <div className="space-y-4">
              {/* Name field for sign up */}
              <div className={`form-control transition-all duration-300 ${!isLogin ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {!isLogin && (
                  <>
                    <label className="label">
                      <span className="label-text font-medium text-gray-700">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </>
                )}
              </div>

              {/* Email field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered bg-gray-100 text-gray-700  w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input input-bordered bg-gray-100 text-gray-700  w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                {isLogin && (
                  <label className="label pt-1">
                    <button type="button" className="label-text-alt cursor-pointer text-orange-600 hover:text-orange-700 transition-colors">
                      Forgot password?
                    </button>
                  </label>
                )}
              </div>

              {/* Confirm Password for sign up */}
              <div className={`form-control transition-all duration-300 ${!isLogin ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {!isLogin && (
                  <>
                    <label className="label">
                      <span className="label-text font-medium text-gray-700">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </>
                )}
              </div>

              {/* Terms agreement for sign up */}
              <div className={`form-control transition-all duration-300 ${!isLogin ? 'opacity-100 max-h-12' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                {!isLogin && (
                  <label className="label cursor-pointer justify-start">
                    <input type="checkbox" className="checkbox checkbox-sm border-gray-400 text-orange-500 mr-3" required />
                    <span className="label-text text-gray-700 text-sm">
                      I agree to the <span className="text-orange-600 hover:text-orange-700 cursor-pointer transition-colors">Terms & Conditions</span>
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
            </div>

            {/* Toggle Mode */}
            <p className="text-center text-gray-600 text-sm mt-6">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={toggleMode}
                className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium transition-colors duration-200"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login