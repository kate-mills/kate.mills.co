/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import {Link} from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import PhoneNumber from '../PhoneNumber'
import {useGlobalContext} from '../../context/context'
import NavSubmenu from './Submenu'
import MobileLink from './MobileLink'
import NavHeadLink from './NavHeadLink'
import styled from 'styled-components'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const query = graphql`
  {
    logo: file(relativePath: {eq: "KateMillsCo.png"}) {
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
            <Img fixed={data.logo.childImageSharp.fixed} alt="Ally Digital Solutions"/>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleNav}>
            <FaAlignRight aria-label="Right align" className="toggle-icon"/>
          </button>
        </div>
        <NavSubmenu/>
        <ul onClick={alwaysCloseNavAfterClick} className={ isOpen
              ? `nav-links show-nav`
              : `nav-links`}>
          { links.map((item, index) => {
            return (
                <li key={index}
                  className={(isSubmenuOpen && page.page===item.page)
                      ?`${item.cls} active`:`${item.cls}`}>
                  <NavHeadLink lnk={item} className={item.cls} hoverFn={displaySubmenu}/>
                { item.links.length &&(
                  <React.Fragment key={index}>
                    {item.links.map((lnk,idx)=><MobileLink key={idx} lnk={lnk} />)}
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
    background: var(--clr-secondary-color);
    color: var(--clr-secondary-color-txt);
    width: 100vw;
  }
  li.no-mobile.show-dt{ color:transparent; }

  & .nav-center{
    padding: 0 1rem;
    .nav-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem 0.5rem;
      .logo{
        padding: .3rem 0;
      }
      .toggle-btn{
        background: inherit !important;
        border: unset;
        /*color: var(--clr-primary-color);*/
        cursor: pointer;
        font-size: 1.5rem;
        margin-left: 10px;
        outline: unset;
      }
    }
  }
  /* mobile */
  & .nav-links {
    border: 1px solid transparent;
    list-style-type: none;
    margin: 0 auto;
    height: 0; /* keep for transition*/
    overflow: hidden;
    transition: height .29s linear, border 1s linear;
    .show-mobile{
      display:block;
    }
  }
  & .nav-links.show-nav {
    border-color: transparent;
    min-height: max-content;
    height: 300px;
    max-height: fit-content;
  }
  & .nav-links a,
  & .nav-links span{
    color: var(--clr-secondary-color-txt);
    display: block;
    font-size: .95rem;
    letter-spacing: var(--altSpacing);
    padding: 1rem 1.25rem;
    height: 100%;
    text-decoration: none;
  }
  & .nav-links a:hover{
    cursor: pointer;
    color: var(--bg-dark-txt);
  }
  & .nav-links a.allow-pointer{
    opacity: 1;
  }
  & .nav-links a.current-page{
    opacity: 1;
    background: var(--clr-primary-color);
  }
  & .nav-links .show-mobile{
    display: block;
  }
  @media screen and (min-width: 576px) {
    & .nav-header{
      padding: 1rem 1.25rem 0.5rem;
      .nav-center{
        .logo{
          max-height: 53px;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    & .nav-center {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 1170px;
      .nav-header{
        .toggle-btn { display: none; }
      }
    }
    .nav-links {
      height: auto;
      display: flex;
      padding-left: 1.25rem; /* Desktop needs left padding*/
      .mobile-link{display:inline;}/* KEEP HERE */
    }
    .nav-links li{
      min-width: 150px;
      text-align: center;
    }
    .nav-links a.phone:hover{
      background:inherit;
      color: inherit;
    }
    .nav-links li.active{
      background:inherit;
      a {}
    }
    .nav-links li.hide-mobile{
      display:none;
    }
    .nav-links a,
    .nav-links span{
      margin-left: 0;   
      padding: 0;
      padding-top: 1.9rem;
    }
  }
  @media screen and (max-width: 375px){
    & .nav-center{
      .nav-header{ padding: 1rem .1rem .5rem; }
    }
  }
`
export default Navbar
