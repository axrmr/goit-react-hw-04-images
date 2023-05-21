import { styled } from 'styled-components';

const Header = styled.header`
    --height: 25px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    .inp-wrapper {
        position: relative;
        display: flex;
    }

    input {
        width: 200px;
        height: var(--height);
        padding: 5px 40px 5px 15px;
        font-size: 15px;
        border: 2px solid #cecece;
        border-radius: 8px;
        outline: 0;
        transition: box-shadow 0.25s linear, border 0.25s linear;
        &:placeholder-shown {
            font-size: 15px;
        }
        &:focus-visible {
            border: 2px solid transparent;
            box-shadow: -1px 1px 7px #00d8ff, 1px 1px 7px #00d8ff;
        }
    }

    button {
        position: absolute;
        top: 50%;
        right: 7px;
        transform: translateY(-50%);
        padding: 2px 0 0 0;
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
`;

export default Header;
