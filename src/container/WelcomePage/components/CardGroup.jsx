import React from 'react';

import styled from 'styled-components'

import icon1 from '../../../assets/icons/icon1.png'
import icon2 from '../../../assets/icons/icon1.png'
import icon3 from '../../../assets/icons/icon1.png'
import icon4 from '../../../assets/icons/icon1.png'
import icon5 from '../../../assets/icons/icon1.png'
import icon6 from '../../../assets/icons/icon1.png'
import HoverCard from '../../../components/HoverCard';

const Content = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 20px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    align-content: center;
    
    @media(max-width: 1200px) {
        grid-template-columns: auto auto;
        grid-gap: 50px;
    }

    @media(max-width: 765px) {
        grid-template-columns: auto;
    }
`;

const data = [
    {
        icon: icon1,
        title: 'UX/UI design',
        description: 'We help you refine your content, develop a functional and converting experience for your users and develop a strong graphic icon',
        action: '/development',
        label: 'Read More'
    },
    {
        icon: icon2,
        title: 'App development',
        description: 'We develop mobile apps for both IOS and ANdroid phones',
        action: '/development',
        label: 'Read More'
    },
    {
        icon: icon3,
        title: 'Web development',
        description: 'We are experts in web development. we develop for everything from simpler informatives sites of wordpress to heiver site',
        action: '/development',
        label: 'Read More'
    },
    {
        icon: icon4,
        title: 'Game development',
        description: 'Lets development your game or hire games developers and game designers',
        action: '/development',
        label: 'Read More'
    },
    {
        icon: icon5,
        title: 'Consulting',
        description: 'If you have a project that any lacks and expertise - please not heistate to contact us',
        action: '/development',
        label: 'Read More'
    },
    {
        icon: icon6,
        title: 'UX/UI design',
        description: 'We help you refine your content, develop a functional and converting experience for your users and develop a strong graphic icon',
        action: '/development',
        label: 'Read More'
    },
]

export default ({}) => (
    <Content>
        {data.map((item, index) => (
            <HoverCard
                key={index}
                icon={<img alt={item.title} src={item.icon} />}
                title={item.title}
                description={item.description}
                action = {item.action}
                label="Read More"
            />
        ))}
    </Content>

)
