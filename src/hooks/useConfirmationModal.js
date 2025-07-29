import { useState } from 'react';

const useConfirmationModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({});

    const openModal = (config = {}) => {
        setModalConfig(config);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        openModal,
        closeModal,
        modalConfig
    };
};

export default useConfirmationModal;