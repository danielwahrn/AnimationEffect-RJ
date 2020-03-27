import React from 'react'

import styled from 'styled-components';

const Card = styled.div`
    width: 55%;
    transform: translate3d(0,20px,0);
    transition: transform 350ms ease;
    
    img {
        border-radius: 10px;
        width: 100%;
    }

    &:hover {
        transform: translate3d(0,0,0)
    }

    @media(max-width: 992px) {
        width: 100%;
    }
`;

export default ({url}) => (
    <Card>
        <img src={url} />
    </Card>
)