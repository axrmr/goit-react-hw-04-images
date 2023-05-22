import { Component } from 'react';
import Overlay from './Modal.styled';

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleEscKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscKey);
    }

    handleEscKey = e => {
        if (e.code === 'Escape') {
            this.props.hideModal();
        }
    };

    render() {
        return (
            <Overlay className='overlay' onClick={this.props.hideModal}>
                <div
                    className='modal'
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    <img
                        src={this.props.largeImageUrl}
                        alt=''
                        width='400'
                        height='300'
                    />
                </div>
            </Overlay>
        );
    }
}

export default Modal;
