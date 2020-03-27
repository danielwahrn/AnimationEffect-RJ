import React from 'react'

import styled from 'styled-components';
import HoverLinkButton from '../../../components/HoverLinkButton';

const Card = styled.div`
    width: 35%;
    text-align: left;
    label {
        text-transform: uppercase;
    }
    h3 {
        margin-top: 0px
    }

    @media(max-width: 992px) {
        width: 100%;
    }
`;

const ButtonStyle = {
    padding: '20px 50px',
    fontWeight: 'bold'
}

export default ({title,topic, text, to}) => (
    <Card>
        <label>{topic}</label>
        <h3>{title}</h3>
        <p>{text}</p>
        <div style={{marginTop: 50}}>
            <HoverLinkButton
                label="Read More"
                to={to}
                style={ButtonStyle}
            />
        </div>
    </Card>
)