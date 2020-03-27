import React from 'react'

import {Section, SubSection} from '../../layout/Section'
import ImageHeader from '../../components/ImageHeader';
import TopicHeader from '../../components/TopicHeader';
import CardGroup from './components/CardGroup';

import ImageCard from './components/ImageCard';
import TextCard from './components/TextCard';
import Blog from './components/Blog';

import bg from '../../assets/images/welcomebg.png'
import cardimage from '../../assets/images/card1.png'

import { FlexSection} from './styles'

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <ImageHeader url={bg} />
                <Section bgcolor="transparent" color="white" first="true">
                    <SubSection>
                        <TopicHeader
                            className="firstsection"
                            topic="interactive solution"
                            title="App and Web agency"
                            text="Interactive Solutions is an app and web agency that helps you design and develop your website, app or game. We are a comprehensive digital agency with very broad expertise. Through customer-friendly collaboration, agile working methods and focus on profitability, we take your project from idea to finished product."
                            action="/contact"
                            label="requests for question"
                        />
                    </SubSection>
                </Section>
                 <Section>
                    <SubSection>               
                        <TopicHeader 
                            title="App and web agency offering comprehensive digital solutions"
                            text="Interactive Solutions is a digital agency that can handle most things when it comes to developing apps and websites. Our passion for everything digital and our extensive expertise enable us to adapt to our client's needs and offer customized solutions. Below is a closer look at what our app and web agency will be happy to help you with."
                        />
                        <CardGroup style={{marginTop: 10}}/>
                    </SubSection>
                </Section>
                
                <Section>
                    <SubSection>
                        <TopicHeader 
                            title="A selection of our app and web projects"
                            text="Below you will see examples of projects that we have rotted in the harbor together with very satisfied customers. Our broad expertise in everything relating to app and web development has given us the opportunity to be involved in realizing widely different digital products. We are very proud to be the kind of web agency, or app agency, that can meet virtually any customer need and deliver great results every time."
                        />
                   
                        <FlexSection>
                            <TextCard
                                topic="SKISTAR"
                                title="Site of the Year 2019 IDG"
                                text="We helped Skistar develop their digital booking system to give customers easy access to their wide range of services. Skistar's strategy of being at the forefront in digital has resulted in their booking platform being ranked first on IDG's Top100 list 2019!"
                                to="/develop"
                            />
                            <ImageCard url={cardimage}/>
                        </FlexSection>
                    </SubSection>
                </Section>
                <Section>
                    <SubSection>
                        <FlexSection>
                            <ImageCard url={cardimage}/>
                            <TextCard
                                topic="EPULZE"
                                title="Betting on e-sports"
                                text="We help Epulze increase the excitement in e-sports by designing and developing a secure esports platform where players can challenge each other and invest real money in their own DOTA 2 matches."
                                to="/develop"
                            />
                        </FlexSection>
                        </SubSection>
                </Section>
                <Section>
                    <SubSection>
                        <FlexSection>
                            <TextCard
                                topic="SETERRA"
                                title="App game for geography"
                                text="Together with entrepreneur Marianne Wartoft, we have designed and developed Seterra, an app game for both children and adults which through gamification makes it fun to learn geography."
                                to="/develop"
                            />
                            <ImageCard url={cardimage}/>
                        </FlexSection>
                        </SubSection>
                </Section>
                <Section>
                    <SubSection>
                        <FlexSection>
                            <ImageCard url={cardimage}/>
                            <TextCard
                                topic="WIDERLÖV & CO"
                                title="Platform for housing"
                                text="For the real estate agent Widerlöv & Co, we have designed and developed a responsive housing site for buyers and sellers as well as an administration platform, linked to the broker system Vitec, which streamlines the brokers' daily work."
                                to="/develop"
                            />
                        </FlexSection>
                    </SubSection>
                </Section>
                <Section>
                    <SubSection >
                        <TopicHeader 
                            style={{padding: '0px 100px'}}
                            title="Previous collaborations"
                            text="Below are some of the brands that previously chose to partner with us for app and web development."
                        />
                        </SubSection>
                </Section>
                <Section>
                    <SubSection >
                        <TopicHeader 
                            title="Blog"
                            text="Through our blog you can keep up to date on what is happening on our web agency and for example see available services. In addition, we often write, and gladly, about things that concern app and web development in general."
                        />
                        <Blog/>
                    </SubSection>
                </Section>
            
            </React.Fragment>
        )
    }
}