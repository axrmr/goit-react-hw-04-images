import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Overlay from './Modal.styled';

const Modal = ({ hideModal, largeImageUrl }) => {
    useEffect(() => {
        const handleEscKey = e => e.code === 'Escape' && hideModal();
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [hideModal]);

    return (
        <Overlay className='overlay' onClick={hideModal}>
            <div
                className='modal'
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <img src={largeImageUrl} alt='' width='400' height='300' />
            </div>
        </Overlay>
    );
};

Modal.propTypes = {
    hideModal: PropTypes.func,
    largeImageUrl: PropTypes.string,
};

export default Modal;
