import ImageItem from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ url, largeImageURL, tags, setLargeImageUrl }) => {
    const handleClick = e => {
        const largeImageURL = e.target.dataset.largeImgUrl;
        setLargeImageUrl(largeImageURL);
    };

    return (
        <>
            <ImageItem className='gallery-item'>
                <img
                    src={url}
                    data-large-img-url={largeImageURL}
                    alt={tags}
                    onClick={handleClick}
                    width='280'
                    height='220'
                />
            </ImageItem>
        </>
    );
};

export default ImageGalleryItem;
