import { styled } from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    cursor: pointer;

    .modal {
        max-width: 700px;
        max-height: 600px;
        padding: 20px;
        overflow: hidden;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 15px;
    }
`;

export default Overlay;
