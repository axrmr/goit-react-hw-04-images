import { styled } from 'styled-components';

const Btn = styled.button`
    padding: 10px 30px;
    font-size: 16px;
    border: 2px solid #cecece;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow 0.25s ease, border 0.25s ease;

    &:hover {
        border: 2px solid transparent;
        box-shadow: -1px 1px 10px #00d8ff, 1px 1px 10px #00d8ff;
    }
`;

export default Btn;
