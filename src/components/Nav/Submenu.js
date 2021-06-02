import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../../context/context'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { center } = location
    submenu.style.left = `${center}px`
  }, [page, location, links])

  return (
    <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show`:`submenu`}`}
      ref={container}
    >
      <div className='submenu-center'>
        {links.map((link, index) => {
          const { url, label } = link
          return(
            <Link
              key={index}
              to={url}
              className="sub-link"
              onClick={closeSubmenu}>{label}
            </Link>
          )
        })}
      </div>
    </SubmenuWrapper>
  )
}
const SubmenuWrapper = styled.aside`
  &{
    border-radius:0;
    font-size: 0.80rem;
    position: absolute;
    top: 77px;
    display: none;
  }
  &.show {
    display: block;
    transform: translateX(-50%) translateY(0);
    width: 150px;
    z-index: 3;
    .submenu-center {
      background-color: var(--solutionsColor);
      :hover{
        .sub-link:hover{
          cursor: pointer !important;
          color: var(--primaryBlack) !important;
          text-decoration: none;
          background-color: var(--primaryColor);
        }
      }
      .sub-link {
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        color: var(--primaryBlack);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: var(--altSpacing);
      }
    }
  }
  @media screen and (max-width: 1199px){
    &{
      display: none !important;
    }
  }
`
export default Submenu
