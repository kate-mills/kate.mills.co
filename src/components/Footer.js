import React from 'react'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import {Link} from 'gatsby'

import styled from 'styled-components'

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path} >
              {item.page}
            </Link>
          )
        })}
      </div>
      <div className="icons">
        { socialIcons.map((item, index) => {
          return <a
            key={index}
            aria-label={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer">
            {item.icon}</a>
        })}
      </div>
        <p className="phone">(415) 988 - 1102</p>
      <div className="small-font">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </FooterWrapper>
    </>
  )
}

const FooterWrapper =styled.footer`
  &{
    font-family: var(--mainFF);
    background-color: var(--clr-secondary-dark);
    color: var(--clr-secondary-dark-txt);
    padding: 4rem;
    margin-top: auto;
    text-align: center;
    width: 100%;
  }
  & > div{
    color: inherit;
  }
  .links a {
    color: inherit;
    display: inline-block;
    letter-spacing: var(--altSpacing);
    margin: 1rem 2.5rem;
    text-decoration: none;
    transition: var(--mainTransition);
  }
  .links a:hover{
    color: var(--clr-secondary-50);
  }
  .icons{
    padding: 1.5rem;
  }
  .icons a {
    display: inline-block;
    font-size: 1.3rem;
    margin: 1rem;
    transition: var(--mainTransition);
  }
  .icons a:hover {
    transform: translateY(-5px);
    color: var(--clr-primary-color);

  }
  .phone{
    color: inherit;
  }
  .phone:hover{
    cursor: pointer;
  }
  .small-font{
    font-family: var(--mainFF);
    letter-spacing: 1px;
    font-size: 0.65rem;
    margin: 0 0;
    color: inherit;
    padding: .5rem .5rem 0;
    text-align: center;
  }
`
export default Footer
