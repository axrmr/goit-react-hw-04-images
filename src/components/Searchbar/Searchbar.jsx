import { FcSearch } from 'react-icons/fc';
import Header from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const { searchQuery } = e.currentTarget;
        onSubmit(searchQuery.value);
        e.currentTarget.reset();
    };

    return (
        <Header className='searchbar'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='inp-wrapper'>
                    <input
                        className='input'
                        type='text'
                        name='searchQuery'
                        autoComplete='on'
                        autoFocus
                        placeholder='Search images and photos'
                    />
                    <button>
                        <FcSearch size={24} />
                    </button>
                </div>
            </form>
        </Header>
    );
};

export default Searchbar;
