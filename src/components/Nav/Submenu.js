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
    font-size: 1rem;
    position: absolute;
    top: 77px;
    display: none;
  }

  &.show {
    display: block;
    transform: translateX(-50%) translateY(0);
    min-width: fit-content;
    z-index: 3;
    .submenu-center {
      background-color:var(--clr-secondary-color);
      color: var(--clr-secondary-color-txt);
      :hover{
        .sub-link:hover{
          text-decoration: none;
          background-color:var(--clr-primary-color);
          color: var(--clr-primary-color-txt);
        }
      }
      .sub-link {
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        letter-spacing: var(--altSpacing);
        padding 1rem;

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
