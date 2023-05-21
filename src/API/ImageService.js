import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const searchParams = {
    key: '33871117-8e8648cedbb6778ee9e40efa1',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

class ImageService {
    static async fetchImagesByKeyword(keyword, page = 1) {
        const response = await axios.get(BASE_URL, {
            params: {
                ...searchParams,
                q: keyword,
                page,
            },
        });

        return response.data;
    }
}

export default ImageService;
