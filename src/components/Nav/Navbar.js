/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import {Link} from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'
import NavSubmenu from './Submenu'
import NavSubLink from './NavSubLink'
import NavHeadLink from './NavHeadLink'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const query = graphql`
  {
    logo: file(relativePath: {eq: "fashion-lg2.png"}) {
      childImageSharp {
        fixed(height: 37, quality: 10) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const Navbar = (props) => {
  const {page, isSubmenuOpen, openSubmenu } = useGlobalContext()

  const [isOpen, setIsOpen] = useState()

  const toggleNav = () => {
    setIsOpen(isOpen => !isOpen)
  }
  const data = useStaticQuery(query)


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
          <Link to={`/`} className="logo">
            <Img fixed={data.logo.childImageSharp.fixed} alt="ally digital solutions text logo"/>
          </Link>
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
          { links.map((item, index) => {
            return (
                <li key={index}
                  className={(isSubmenuOpen && page.page===item.page)
                      ?`${item.cls} active`:`${item.cls}`}>
                  <NavHeadLink lnk={item} className={item.cls} hoverFn={displaySubmenu}/>
                { item.links.length &&(
                  <React.Fragment key={index}>
                    {item.links.map((lnk,idx)=><NavSubLink key={idx} lnk={lnk} />)}
                  </React.Fragment>
                )} 
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
    width: 100vw;
  }
  & .nav-center{
    padding: 0 1rem 0;
  }
  .nav-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.25rem 0.5rem 1rem;
  }
  .toggle-btn {
    background: inherit !important;
    border: unset;
    color: var(--primaryColor);
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 10px;
    outline: unset;
  }
  .nav-links {
    border: 1px solid transparent;
    list-style-type: none;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: 0 auto;
    height: 0; /* keep for transition*/
    overflow: hidden;
    transition: height .29s linear, border 1s linear;

    .show-mobile{
      display:block;
    }
  }
  .show-nav {
    border-color: transparent;
    height: 450px;
  }
  .nav-links a,
  .nav-links span{
    color: var(--primaryWhite);
    display: block;
    font-size: 0.95rem;
    letter-spacing: var(--altSpacing);
    padding: 1rem 1.25rem;
    height: 100%;
    text-decoration: none;
  }
  .nav-links a:hover{
    background: var(--primaryBlack2);
  }
  .nav-links a.allow-pointer{
    opacity: 1;
  }
  .nav-links a.current-page{
    opacity: 1;
    pointer-events: none;
    background: var(--primaryColor);
  }
  .nav-links .show-mobile{
    display: block;
  }
  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 1rem;
    }
    & .nav-center{
      .logo{
        max-height: 53px;
      }
    }
    .nav-header{
      padding: 1rem 1.25rem 0.5rem;
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
      padding-left: 1.25rem;
      .mobile-link{display:none;}/* KEEP HERE */
    }
    .nav-links li{
      min-width: 150px;
      text-align: center;
    }
    .nav-links a.phone:hover{
      background:var(--primaryBlack);
      color: var(--primaryColor);
    }
    .nav-links li.active{
      background:var(--primaryBlack2); /* styles while hovering over submenu */
      a {
        color: var(--primaryWhite);
      }
    }
    .nav-links li.hide-mobile{
      display:none;
    }
    .logo{
      padding: .3rem 0;
    }
    .nav-links a,
    .nav-links span{
      margin-left: 0;   
      padding: 0;
      padding-top: 1.9rem;
    }
  }
  @media screen and (max-width: 320px){
    .nav-header{
      padding: 1rem 0 .5rem 0;
    }
  }
`
export default Navbar

//&::after{ width: 100%; background: var(--primaryBlack2); content: ''; position: absolute; width: 100vw; height: 1px; opacity: .2; }
