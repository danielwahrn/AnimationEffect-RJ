
import styled from 'styled-components'

const ImageHeader = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 1000px;
    z-index: -1;
    background: url(${props => props.url}) no-repeat;
    background-size: cover;

    @media(max-width: 1200px) {
        top: 60px;
    }
`;

export default ImageHeader;