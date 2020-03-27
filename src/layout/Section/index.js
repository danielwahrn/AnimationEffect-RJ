import styled from 'styled-components'
import colors from '../../common/colors'

export const Section = styled.div`
    width: 100%;
    margin-top: ${props => props.first ? '100px' : '0px'};
    background: ${props => props.bgcolor ? props.bgcolor : colors.yellow};
    color: ${props => props.color ? props.color : 'black'};
`;
    
export const SubSection = styled.div`
    padding-bottom: 100px;
    padding-top: 100px;
    max-width: 1200px;
    margin: auto;
    text-align: center;
    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media (min-width: 768px)
    {
        padding-left: 50px;
        padding-right: 50px;
    }
    @media (min-width: 992px)
    {
        padding-left: 50px;
        padding-right: 50px;
    }
    @media (min-width: 1200px)
    {
        padding-left: 50px;
        padding-right: 50px;
    }
    @media (min-width: 1400px)
    {
        padding-left: 180px;
        padding-right: 180px;
    }
    

`;

export default Section;