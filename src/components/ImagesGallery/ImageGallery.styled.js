import { styled } from 'styled-components';

const Gallery = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 15px;
    margin: 0 0 40px;
    padding: 0;
    list-style: none;

    li {
        width: 100%;
        height: 100%;
        max-height: 200px;
        overflow: hidden;
        border-radius: 5px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.25s linear;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

export default Gallery;
