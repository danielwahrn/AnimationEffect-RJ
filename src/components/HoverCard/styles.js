import styled from 'styled-components'

const styles={}

export default styles;

export const Card = styled.div`
    display: block;
    padding: 20px;
    border-radius: 15px;
    color: ${props => props.color};
    background: ${props => props.bgcolor};
    text-align: center;
    ${props => props.style};
    transform: translate3d(0,40px,0);
    transition: transform 350ms ease;

    &:hover {
      background: ${props => props.hoverbgcolor};
      color: ${props => props.hovercolor};
    }
    
    @media(max-width: 1200px) {
      background: white;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 150px;
    padding: 20px;
    transform: translate3d(0,5px,0);
    transition: transform 350ms ease;
`;

export const Body = styled.div`
    width: 100%;
    height: 250px;
    transform: translate3d(0,15px,0);
    transition: transform 350ms ease;
`;

export const Footer = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    
    transform: translate3d(0,20px,0);
    transition: transform 350ms ease;
`;

export const FooterHover = styled.div`
    opacity: 0;
    transition: opacity 350ms ease;

    @media(max-width: 1200px) {
      opacity: 1;
    }
`;

export const ButtonStyle = {
    padding: '15px 40px',
    fontWeight: 'bold'
}

export  const Background = styled.div({
   
    [`:hover ${Body}, :hover ${Header}, :hover ${Footer}, :hover ${Card}`]: {
      transform: "translate3d(0,0,0)",
    },
    [`:hover ${FooterHover}`]: {
      opacity: 1,
    },
  });