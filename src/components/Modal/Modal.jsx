import Overlay from './Modal.styled';

const Modal = ({ largeImageUrl, hideModal }) => {
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

export default Modal;
