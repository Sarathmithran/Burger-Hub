import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validation/authSchema';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authThunk';
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, userRegistered } = useSelector(state => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

    // Handle register success/error
    useEffect(() => {
        if (userRegistered) {
        toast.success('Registered successful! Redirecting...', {
            position: "top-center",
            autoClose: 2000,
            onClose: () => navigate('/login')
        });
        }
        
        if (error) {
            toast.error(error, {
                position: "top-center",
                autoClose: 5000
            });
        }
    }, [userRegistered, error, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
    }));
  };

  return (
    <div className="min-h-screen bg-white to-gray-900 flex items-center justify-center pt-25 md:pt-30 pb-15">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl md:shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-center border-b-4 border-orange-300">
            <div className="w-15 h-15 p-2 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <img src={logo} alt='logo'/>
            </div>
            <p className="text-gray-200 text-sm">Join our delicious community</p>
          </div>

          <form className="px-6 py-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Enter your full name"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Email</span>
                </label>
                <input
                  type="email"
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
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-gray-700">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register('confirmPassword')}
                  className="input input-bordered bg-gray-100 text-gray-700 w-full focus:border-orange-600 focus:outline-none border-gray-300 hover:border-gray-400 transition-colors"
                  placeholder="Confirm your password"
                />
                <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer justify-start">
                  <input 
                    type="checkbox" 
                    {...register('agree')}
                    className="checkbox checkbox-sm border-gray-400 text-orange-500 mr-3"
                  />
                  <span className="label-text text-gray-700 text-sm">
                    I agree to the <span className="text-orange-600 hover:text-orange-700 cursor-pointer transition-colors">Terms & Conditions</span>
                  </span>
                </label>
                <p>
                    {errors.agree && (
                  <span className="text-red-500 text-xs mt-1">{errors.agree?.message}</span>
                )}
                </p>
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
                  'Create Account'
                )}
              </button>

              <p className="text-center text-gray-600 text-sm mt-6">
                Already have an account?{' '}
                <Link
                  to={"/login"}
                  className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium transition-colors duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;