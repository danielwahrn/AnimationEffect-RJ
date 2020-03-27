import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import colors from '../../common/colors'

const HoverLinkButton = styled.div`
    display: inherit;
    width: fit-content;
    color: ${props => props.color};
    background: ${props => props.bgcolor};
    border-radius: 30px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    ${props => props.style};
    &:hover {
      background: ${props => props.hoverbgcolor};
      color: ${props => props.hovercolor};
    }
`;

export default ({
    label,
    to,
    bgcolor,
    hoverbgcolor,
    color,
    hovercolor,
    style,
    className,
    onClickHandle
})=> ( 
    <div>
    <Link to={to}>
        <HoverLinkButton 
            bgcolor={bgcolor ? bgcolor : 'white'} 
            hoverbgcolor={hoverbgcolor ? bgcolor : 'black'} 
            color={color? color: 'black'} 
            hovercolor={hovercolor? hovercolor: 'white'} 
            className={className} 
            style = { style}
        >
        
            {label}
        </HoverLinkButton>
    </Link>
    </div>
)