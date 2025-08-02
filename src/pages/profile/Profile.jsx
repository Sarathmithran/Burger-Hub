import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { profileSchema } from '../../validation/profileSchema';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, updateUser } from '../../features/auth/authThunk';
import { toast } from 'react-toastify';
import useConfirmationModal from '../../hooks/useConfirmationModal';
import ConfirmationModal from '../../components/confirmationModal/ConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../../features/cart/cartSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector(state => state.auth);
    const { isOpen, openModal, closeModal, modalConfig } = useConfirmationModal();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(profileSchema)
    });

    useEffect(() => {
        if (user) {
            reset({
            fullName: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            address: user.address || '',
            });
        }
    }, [user, reset]);

    const handleLogoutClick = () => {
        openModal({
            title: "Confirm Logout",
            description: 'Are you sure you want to logout?',
            confirmText: "Logout",
            onConfirm: handleLogout,
            confirmColor: "error"
        });
    };

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            dispatch(resetCart());
            navigate('/');
        } catch { 
            closeModal(); 
        }
    };

  const handleSave = async (data) => {
       const payload = {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        };

        // Check if values are the same
        const isSame =
            user?.name === payload.name &&
            user?.email === payload.email &&
            user?.phone === payload.phone &&
            user?.address === payload.address;

        if (isSame) {
            toast.info('No changes detected');
            return;
        }
    try {
        const result = await dispatch(updateUser(payload));

        if (updateUser.fulfilled.match(result)) {
            toast.success('Profile updated successfully');
        } else {
            toast.error('Update failed');
        }

    } catch {
        toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto pt-20">
        <ConfirmationModal
            isOpen={isOpen}
            loading={loading}
            onClose={closeModal}
            onConfirm={modalConfig.onConfirm}
            title={modalConfig.title}
            description={modalConfig.description}
            confirmText={modalConfig.confirmText}
            cancelText={modalConfig.cancelText}
            confirmColor={modalConfig.confirmColor}
        />
        {/* Additional Info Card */}
        <div className="card bg-orange-50 shadow-sm border border-orange-200 mb-6">
          <div className="card-body p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-orange-800 mb-1">Account Security</h3>
                <p className="text-orange-700 text-sm">
                  Keep your account secure by using a strong password.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="card bg-white shadow-xl border border-orange-100">
          <div className="card-body p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
                <p className="text-gray-600 mt-1">Manage your account information</p>
              </div>
              <button 
                onClick={handleLogoutClick}
                className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>

            {/* Profile Information */}
            <form  onSubmit={handleSubmit(handleSave)}>
                <div className="space-y-6">
                {/* Full Name */}
                <div className="form-control w-full">
                    <label className="label pb-2">
                    <span className="label-text text-gray-700 font-semibold text-sm">Full Name</span>
                    </label>
                    <input
                    {...register('fullName')}
                    className="input input-bordered w-full bg-white border-orange-200 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Enter your full name"
                    />
                    <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
                </div>

                {/* Email */}
                <div className="form-control w-full">
                    <label className="label pb-2">
                    <span className="label-text text-gray-700 font-semibold text-sm">Email Address</span>
                    </label>
                    <input
                    {...register('email')}
                    className="input input-bordered w-full bg-white border-orange-200 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Enter your email address"
                    />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>

                {/* Phone */}
                <div className="form-control w-full">
                    <label className="label pb-2">
                    <span className="label-text text-gray-700 font-semibold text-sm">Phone Number</span>
                    </label>
                    <input
                    {...register('phone')}
                    className="input input-bordered w-full bg-white border-orange-200 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
                    placeholder="Enter your phone number"
                    />
                    <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                </div>

                {/* Address */}
                <div className="form-control w-full">
                    <label className="label pb-2">
                    <span className="label-text text-gray-700 font-semibold text-sm">Address</span>
                    </label>
                    <textarea
                    {...register('address')}
                    className="textarea textarea-bordered w-full bg-white border-orange-200 focus:border-orange-500 focus:outline-none text-gray-800 placeholder-gray-400 h-24 resize-none"
                    placeholder="Enter your address"
                    />
                    <p className="text-red-500 text-sm">{errors.address?.message}</p>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-8 pt-6 border-t border-gray-200">
                <button 
                    type='submit'
                    className="btn bg-orange-500 text-white hover:bg-orange-600 border-orange-500 hover:border-orange-600 w-full sm:w-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {loading ? 'Saving...' : 'Save Profile'}
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;