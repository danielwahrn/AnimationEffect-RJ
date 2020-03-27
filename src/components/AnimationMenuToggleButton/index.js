import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import {StyledToggle, StyledMenu} from './styles'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/developent">App development</Link>
      <Link to="/developent">Web development</Link>
      <Link to="/developent">Service</Link>
      <Link to="/developent">About us</Link>
      <Link to="/developent">Customer</Link>
      <Link to="/developent">Blog</Link>
    </StyledMenu>
  )
}


const Toggle = ({ open, setOpen }) => {
  return (
    <StyledToggle open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledToggle>
  )
}


export default ({}) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
      <div ref={node}>
        <Toggle open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
  )  
}

export const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };