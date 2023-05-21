import { Component } from 'react';
import ImageService from '../../API/ImageService';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import Gallery from './ImageGallery.styled';

class ImageGallery extends Component {
    state = {
        images: [],
        error: '',
        isLoading: false,
        largeImageUrl: '',
        isModalVisible: false,
        searchQuery: '',
        page: 1,
        totalHits: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const trimmedQuery = this.state.searchQuery.trim();
        if (
            (prevState.searchQuery !== trimmedQuery && trimmedQuery) ||
            prevState.page !== this.state.page
        ) {
            this.setState({ isLoading: true });
            ImageService.fetchImagesByKeyword(trimmedQuery, this.state.page)
                .then(data => {
                    console.log('data', data);
                    this.setState(prev => {
                        if (prev.images.length)
                            return {
                                images: [...prev.images, ...data.hits],
                                totalHits: data.totalHits,
                            };
                        return { images: data.hits, totalHits: data.totalHits };
                    });
                })
                .catch(err => this.setState({ error: err.data }))
                .finally(() => this.setState({ isLoading: false }));
        }
    }

    handleSearchSubmit = searchQuery => {
        this.setState({ searchQuery, page: 1, images: [] });
    };

    handleLoadMoreBtn = () => {
        this.setState({ page: this.state.page + 1 });
    };

    setLargeImageUrl = largeImageUrl => {
        this.setState({ largeImageUrl, isModalVisible: true });
    };

    hideModal = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        const {
            images,
            error,
            isLoading,
            isModalVisible,
            largeImageUrl,
            totalHits,
        } = this.state;
        console.log('total', totalHits);

        return (
            <>
                <Searchbar onSubmit={this.handleSearchSubmit} />
                {error && <h4>{error}</h4>}
                {Boolean(images.length) && (
                    <Gallery>
                        {images.map(image => (
                            <ImageGalleryItem
                                key={image.id}
                                url={image.webformatURL}
                                largeImageURL={image.largeImageURL}
                                tags={image.tags}
                                setLargeImageUrl={this.setLargeImageUrl}
                            />
                        ))}
                    </Gallery>
                )}
                {totalHits === 0 && <h4>No images found</h4>}
                {isLoading && <Loader />}
                {Boolean(images.length) && !isLoading && (
                    <Button onClick={this.handleLoadMoreBtn}>Load more</Button>
                )}
                {isModalVisible && (
                    <Modal
                        largeImageUrl={largeImageUrl}
                        hideModal={this.hideModal}
                    />
                )}
            </>
        );
    }
}

export default ImageGallery;
