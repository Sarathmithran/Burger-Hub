import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/authSchema';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authThunk';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, token, loading } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  // Handle login success/error
  useEffect(() => {
    if (isAuthenticated && token) {
      toast.success('Login successful! Redirecting...', {
        autoClose: 2000,
        onClose: () => navigate('/')
      });
    }
    
    if (error) {
      toast.error(error, {
        autoClose: 5000
      });
    }
  }, [isAuthenticated, token, error, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="min-h-screen bg-white to-gray-900 flex items-center justify-center pt-25 md:pt-30 pb-15">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl md:shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-center border-b-4 border-orange-300">
            <div className="w-15 h-15 p-2 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <img src={logo} alt='logo'/>
            </div>
            <p className="text-gray-200 text-sm">Welcome back!</p>
          </div>

          <form className="px-6 py-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Email</span>
                </label>
                <input
                  {...register('email')}
                  className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Enter your email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password')}
                  className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Enter your password"
                />
                <p className="text-red-500 text-sm">{errors.password?.message}</p>
                <label className="label pt-1">
                  <button type="button" className="label-text-alt cursor-pointer text-orange-600 hover:text-orange-700 transition-colors">
                    Forgot password?
                  </button>
                </label>
              </div>

              <button
                type="submit"
                className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <span className="loading loading-dots loading-sm"></span>
                  </>
                ) : (
                  'Login'
                )}
              </button>

              <p className="text-center text-gray-600 text-sm mt-6">
                Don't have an account?{' '}
                <Link
                  to={"/register"}
                  className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium transition-colors duration-200"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;