import React from 'react'

import {Link} from 'react-router-dom'

import HoverLinkButton from '../../components/HoverLinkButton'

import colors from '../../common/colors'

import {Card, Header, Body, Footer, Background, ButtonStyle, FooterHover} from './styles'

export default ({
    title,
    label,
    description,
    action,
    icon,
    bgcolor,
    hoverbgcolor,
    color,
    hovercolor,
    style,
    className,
})=> (
    <Background>
    <Card 
        bgcolor={bgcolor ? bgcolor : colors.yellow} 
        hoverbgcolor={hoverbgcolor ? hoverbgcolor : 'white'} 
        color={color? color: 'black'} 
        hovercolor={hovercolor? hovercolor: 'black'} 
        className={className} 
        style = { style}
    >
        <Header>
            {icon}
        </Header>
        <Body>
            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </Body>
        <FooterHover>
        <Footer>
            <HoverLinkButton to={action} label={label} className="btn_more" bgcolor={colors.yellow} style={ButtonStyle}/>
        </Footer>
        </FooterHover>
    </Card>
    </Background>
)