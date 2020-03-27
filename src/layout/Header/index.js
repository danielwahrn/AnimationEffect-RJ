import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'

import HoverLinkButton from '../../components/HoverLinkButton'
import AnimationMenuToggleButton from '../../components/AnimationMenuToggleButton'

import colors from '../../common/colors'

import logo from '../../assets/images/logo.png'

import {Header, HeaderLeft, HeaderRight, ButtonStyle, ButtonSmallStyle} from './styles'

export default ({}) => {

  const [navBackground, setNavBackground] = useState(false)
  const [button, setButton] = useState(window.innerWidth > 1200 ? ButtonStyle: ButtonSmallStyle)

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      // const show = window.scrollY > 50
      if (window.scrollY > 50) {
        setNavBackground(true)
      }
      else 
        setNavBackground(false)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleChange = () => {
      if(window.innerWidth < 1200){
        setButton(ButtonSmallStyle)
      }
      else
      {
        setButton(ButtonStyle)
        // setNavBackground(false)
      }
    }

    window.addEventListener('resize', handleChange)

    return () => {
      window.removeEventListener('resize', handleChange)
    }
  }, [])
  
  return (
      <Header style={{backgroundColor: navBackground ? "white" : "transparent"}}>
        <HeaderLeft>
          <Link to="/"><img src={logo}/></Link>
        </HeaderLeft>
        <HeaderRight>
          <Link to="appdevelop" style={{color: navBackground ? 'black' : 'white'}}>App Development</Link>
          <Link to="webdevelop" style={{color: navBackground ? 'black' : 'white'}}>Web Development</Link>
          <Link to="services" style={{color: navBackground ? 'black' : 'white'}}>Services</Link>
          <Link to="aboutus" style={{color: navBackground ? 'black' : 'white'}}>About Us</Link>
          <Link to="customercase" style={{color: navBackground ? 'black' : 'white'}}>Custoerm Case</Link>
          <Link to="blog" style={{color: navBackground ? 'black' : 'white'}}>Blog</Link>
          <HoverLinkButton to="/contact" label="contact" className="btn_header_contact" style={button} bgcolor={button == ButtonSmallStyle || navBackground ? colors.yellow : 'white'}/>
          <AnimationMenuToggleButton />
        </HeaderRight>
      </Header>
  )
}