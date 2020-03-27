import React from 'react'
import styled from 'styled-components'

import HoverLinkButton from '../HoverLinkButton'

const TopicHeader = styled.div`
    ${props => props.style};
    text-align: center;
    h1, h3{
        margin-top: 0px;
    }
    p {
        line-height: 1.5;
        margin: auto;
    }
`;

export default ({ topic, title, smalltitle, text,action, label, className, style}) => (
    <TopicHeader className={className} style={style}>
        {topic &&
            <label>{topic}</label>
        }
        {title && 
            <h1>{title}</h1>
        }
        {smalltitle && 
            <h3>{smalltitle}</h3>
        }
        {text && 
            <p>{text}</p>
        }
        {label &&
        <div style={{marginTop: 80}}>
            <HoverLinkButton 
                label={label}
                to={action}
                style={{padding: '15px 70px'}}
            />
        </div>
        }
    </TopicHeader>
)