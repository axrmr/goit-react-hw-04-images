import PropTypes from 'prop-types';
import Btn from './Button.styled';

const Button = ({ children, ...props }) => {
    return <Btn {...props}>{children}</Btn>;
};

Button.propTypes = {
    children: PropTypes.any,
};

export default Button;
