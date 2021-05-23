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
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [page, location, links])

  return (
   <SubmenuWrapper
      className={`${isSubmenuOpen ? `submenu show`:`submenu`}`}
      ref={container}>
     <div/>{/* this extra empty div keeps alignment looking good.*/}
      <section>
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
      </section>
    </SubmenuWrapper>
  )
}
const SubmenuWrapper = styled.aside`
  &{
    border-radius:0;
    display: none; 
    font-size: 0.80rem;
    height: fit-content;
    position: absolute;
    top: 4rem;
    transform: translateX(-50%) translateY(3px);
    width: 150px;
    z-index: 3;
  }
  & section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &.show {
    display: block;
  }
  .submenu-center {
    background-color: var(--solutionsColor);
  }
  .submenu-center .sub-link {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: var(--primaryBlack);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: var(--altSpacing);
    width: 150px;
  }
  .submenu-center:hover .sub-link:hover{
    cursor: pointer !important;
    color: var(--primaryBlack) !important;
    text-decoration: none;
    background-color: var(--primaryColor);
    width: 100%;
  }
  @media screen and (max-width: 1199px){
    &{
      display: none !important;
    }
  }
`
export default Submenu
