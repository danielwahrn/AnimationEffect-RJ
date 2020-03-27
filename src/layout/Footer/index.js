import React from 'react'
import {Link} from 'react-router-dom'

import {Content , BlogSection , ButtonStyle, InfoSection, Support, SupportLeft, SupportRight} from './styles'
import {Section, SubSection} from '../Section'
import TopicHeader from '../../components/TopicHeader'

import HoverLinkButton from '../../components/HoverLinkButton'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/icons/facebook.jpg'
import google from '../../assets/icons/google.png'
import colors from '../../common/colors'

export default ({}) => (
    <Section bgcolor={colors.dark} color="white">
        <SubSection>
            <TopicHeader 
                topic="become of one us"
                smalltitle="Want see your feature in your project?"
                label="spontonus apply"
                action="/contact"
            />
            <InfoSection>
            <img src={logo} />
            <p>INTERACTIVE SOLUTIONS BODAMA AB 2020</p>
            <p>018 5 800 800  -  VAKSALAGATAN 28, UPPSALA</p>
        </InfoSection>
            <Support>
            <SupportLeft>
                <Link to="/aboutus">ABOUT US</Link>
                <Link to="/aboutus">CUSTOMER CASE</Link>
                <Link to="/aboutus">SERVICES</Link>
                <Link to="/aboutus">BLOG</Link>
                <Link to="/aboutus">CAREER</Link>
                <Link to="/aboutus">CONTACT</Link>
            </SupportLeft>
            <SupportRight>
                <Link><img width="20px" src={facebook} /></Link>
                <Link><img width="20px" src={google} /></Link>
            </SupportRight>
        </Support>
        </SubSection>
    </Section>
)