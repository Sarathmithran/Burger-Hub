import React from 'react';

const ConfirmationModal = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title = "Confirm Action",
    description = "Are you sure you want to perform this action?",
    confirmText = "Confirm",
    cancelText = "Cancel"
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box bg-white shadow-xl">
                <h3 className="font-bold text-lg text-gray-800">{title}</h3>
                {description && <p className="py-4 text-gray-600">{description}</p>}
                <div className="modal-action">
                    <button 
                        className="btn bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button 
                        className="btn bg-red-500 text-white border-transparent"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;