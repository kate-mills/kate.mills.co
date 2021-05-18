/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import {Link} from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import logo from '../../images/ally-digital-solutions-logo.png'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'
import NavSubmenu from './Submenu'
import styled from 'styled-components'

const Navbar = (props) => {
  const {page, isSubmenuOpen, openSubmenu } = useGlobalContext()

  const [isOpen, setIsOpen] = useState()

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const displaySubmenu = (e)=>{
    const page_name = e.target.textContent;           // I get this text
    const tempBtn = e.target.getBoundingClientRect(); // I get object with coordinates
    const center = (tempBtn.left + tempBtn.right)/2; // center of anilink
    const bottom = (tempBtn.bottom - 3);             // bottom of anilink - 3px
    openSubmenu(page_name, {center, bottom});
  };

  const alwaysCloseNavAfterClick=()=>{setIsOpen(false)}

  return (
    <NavWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={`/`} className="logo"><img width="211" height="43" src={logo} alt="logo" /></Link>
          <button type="button" className="toggle-btn" onClick={toggleNav}>
            <FaAlignRight aria-label="Right align" className="toggle-icon"/>
          </button>
        </div>
        <NavSubmenu/>
        <ul onClick={alwaysCloseNavAfterClick}
          className={
            isOpen
              ? `nav-links show-nav`
              : `nav-links`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}
                className={(isSubmenuOpen && page.page===item.page)? `active`:`link`}>
                <Link to={item.path}
                  onMouseOver={displaySubmenu}
                >{item.page}</Link>
              </li>
            )
          })}
          <li><PhoneNumber className="phone"/></li>
        </ul>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  &{
    background: var(--primaryBlack);
    width: 100%;
  }
  .nav-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.25rem 0.5rem 1.02rem;
  }
  .logo{
    padding: .3rem 0;
  }
  .toggle-btn {
    color: var(--solutionsColor);
    background: inherit !important;
    border: unset;
    margin-left: 10px;
    outline: unset;
  }
  .toggle-btn {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-links {
    list-style-type: none;
    padding-left: 1.25rem;
    margin: 0 auto;
    height: 0;
    overflow: hidden;
    transition: var(--mainTransition);
  }
  .show-nav {
    height: 265px;
  }
  .nav-links a,
  .nav-links span{
    color: var(--digitalColor2);
    display: block;
    font-size: 0.95rem;
    letter-spacing: var(--altSpacing);
    padding: 1rem 1.25rem;
    text-decoration: none;
  }
  .nav-links a:hover{
    background: var(--primaryBlack2);
    color: var(--primaryColor);
  }
    .nav-links a.phone:hover{
      color: var(--digitalColor2) !important;
      background:transparent !important;
    }
  
  .nav-links a.allow-pointer{
    opacity: 1;
  }
  .nav-links a.current-page{
    opacity: 1;
    pointer-events: none;
    background: var(--primaryColor);
    color: var(--primaryColor) !important;
  }
  
  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 1rem;
    }
    .logo{
      max-height: 53px;
      padding: .3rem 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .toggle-btn {
      display: none;
    }
    & .nav-center {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1170px;
    }
    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-links li{
      min-width: 150px;
      text-align: center;
    }
    .nav-links li.link{
      background: unset;
    }
    .nav-links a:hover{
      background: var(--primaryBlack2);
      color: var(--primaryColor) !important;
    }
    .nav-links a.phone:hover{
      background:transparent;
    }
    .nav-links li.active{
      background: var(--primaryBlack2);/*styles while hovering over submenu*/
      a {
        color: var(--digitalColor);
      }
    }
    .logo{
      padding: .3rem 0;
    }
    .nav-links a,
    .nav-links span{
      margin-left: 0;   
    }
  }

`
export default Navbar
