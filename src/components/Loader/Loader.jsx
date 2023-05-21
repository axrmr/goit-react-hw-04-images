import { Oval } from 'react-loader-spinner';
import Wrapper from './Loader.styled';

const Loader = () => {
    return (
        <Wrapper>
            <Oval
                height={45}
                width={45}
                color='#00D8FF'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor='#00D8FF'
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </Wrapper>
    );
};

export default Loader;
