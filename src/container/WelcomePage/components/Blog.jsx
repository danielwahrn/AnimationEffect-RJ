import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    ${props => props.style};
    `;
    
const Blog = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    align-content: center;
    padding-top: 100px;
    
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;
    
const Post = styled.div`
    text-align: left;
    height: 250px;
    padding-top: 70px;
    padding-right: 60px;
    padding-left: 30px;
    border-right: solid 3px rgba(0,0,0,0.3);
    a {color: black}
    
    @media(max-width: 768px){
        border-right: solid 0px rgba(0,0,0,0.3);
        border-bottom: solid 3px rgba(0,0,0,0.3);
        height: 150px;
    }
`;

const data = [
    {
        topic: "CAREER",
        title: "Driven frontend developers are looking for",
        action: '/development'
    },
    {
        topic: "CAREER",
        title: "Hungry app developers are looking for",
        action: '/development'
    },
    {
        topic: "CAREER",
        title: "We are looking for IT sales people",
        action: '/development'
    },
]

export default ({style}) => (
    <Content style={style}>
        <Blog>
        {data.map((post, index)=> (
            <Post key={index}>
            <label>{post.topic}</label>
            <h4><Link to={post.action}>{post.title}</Link> </h4>
            </Post>
        ))}
        </Blog>
    </Content>
)