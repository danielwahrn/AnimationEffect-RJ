import styled from 'styled-components'
import colors from '../../common/colors'

const styles={};

export default styles;

export const FlexSection = styled.div`
    display: flex;
    padding-top: 100px;
    width: 100%;
    margin: auto;
    color: black;
    justify-content: space-between;

    @media (max-width: 992px) {
        display: block;
    }
`;