import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import Header from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
    return (
        <Header className='searchbar'>
            <form className='form' onSubmit={onSubmit}>
                <div className='inp-wrapper'>
                    <input
                        className='input'
                        type='text'
                        name='searchQuery'
                        autoComplete='on'
                        autoFocus
                        placeholder='Search images and photos'
                        required
                    />
                    <button>
                        <FcSearch size={24} />
                    </button>
                </div>
            </form>
        </Header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

export default Searchbar;
