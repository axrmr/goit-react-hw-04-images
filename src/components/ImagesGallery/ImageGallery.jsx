import ImageService from 'API/ImageService';
import Button from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import countTotalPage from 'helpers/countTotalPage';
import { useEffect, useState } from 'react';
import Gallery from './ImageGallery.styled';

const PER_PAGE = 12;

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [largeImageUrl, setLargeImageUrl] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalHits, setTotalHits] = useState(null);
    const [limit, setLimit] = useState(null);

    useEffect(() => {
        if (!searchQuery) return;

        setIsLoading(true);
        ImageService.fetchImagesByKeyword(searchQuery, page)
            .then(data => {
                setImages(prev => {
                    if (!prev.length) {
                        return data.hits;
                    }
                    return [...prev, ...data.hits];
                });
                setTotalHits(data.totalHits);
            })
            .catch(err => setError(err.data))
            .finally(() => setIsLoading(false));

        setIsLoading(true);
    }, [searchQuery, page]);

    const handleSearchSubmit = e => {
        e.preventDefault();
        setSearchQuery(e.target.searchQuery.value);
        setPage(1);
        setImages([]);
        setLimit(true);
        e.target.reset();
    };

    const handleLoadMoreBtn = () => {
        const limit = countTotalPage(totalHits, PER_PAGE);
        if (page === limit) {
            setLimit(false);
        }
        setPage(page + 1);
    };

    const getLargeImageUrl = largeImageUrl => {
        setLargeImageUrl(largeImageUrl);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Searchbar onSubmit={handleSearchSubmit} />
            {error && <h4>{error}</h4>}
            {Boolean(images.length) && (
                <Gallery>
                    {images.map(image => (
                        <ImageGalleryItem
                            key={image.id}
                            url={image.webformatURL}
                            largeImageURL={image.largeImageURL}
                            tags={image.tags}
                            setLargeImageUrl={getLargeImageUrl}
                        />
                    ))}
                </Gallery>
            )}
            {totalHits === 0 && <h4>No images found</h4>}
            {isLoading && <Loader />}
            {Boolean(images.length) && !isLoading && limit && (
                <Button onClick={handleLoadMoreBtn}>Load more</Button>
            )}
            {isModalVisible && (
                <Modal largeImageUrl={largeImageUrl} hideModal={hideModal} />
            )}
        </>
    );
};

export default ImageGallery;
