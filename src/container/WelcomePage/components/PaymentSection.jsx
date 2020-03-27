import React from 'react'

import styled from 'styled-components'

import payment1 from '../../../assets/images/payment1'
import payment2 from '../../../assets/images/payment2'
import payment3 from '../../../assets/images/payment3'
import payment4 from '../../../assets/images/payment4'

const Content = styled.div`
    display: flex;
`;

export default ({}) => (
    <div>
        <img src={payment1} />
        <img src={payment2} />
        <img src={payment3} />
        <img src={payment4} />
    </div>
)