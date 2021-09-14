import * as React from 'react'
import {Link} from 'gatsby'
import {useGlobalContext} from '../../context/context'

import styled from 'styled-components'

//const noClk=(e)=>{e.preventDefault()}

const NavDesktopHeadLink = ({className, lnk, hoverFn}) =>{
  return (
    ((lnk.links.length > 0)?
      <HeadLinkPlus className={className} lnk={lnk} hoverFn={hoverFn}/>
      :<HeadLinkSimple className={className} lnk={lnk}/>
    )
  )
}
const HeadLinkSimple = ({className, lnk}) => {
  const {closeSubmenu } = useGlobalContext()
  return (
    <SimpleWrapper
      to={lnk.path}
      className={`${className} head-link-simple`}
      onMouseOver={closeSubmenu}>{lnk.page}
    </SimpleWrapper>
  )
}
const HeadLinkPlus = ({className, lnk, hoverFn}) => {
  return (
    <PlusWrapper
      to={lnk.path}
      onMouseOver={hoverFn}
      /*onClick={noClk}*/
      className={`${className} head-link-plus`}>
      {lnk.page}
    </PlusWrapper>
  )
}
const SimpleWrapper = styled(Link)`
  &{
    display:none !important;
    transition: none !important;
  }
  @media screen and (min-width:1200px){
    &{
      cursor: pointer;
      display:block !important;
    }
  }
`
const PlusWrapper = styled(Link)`
  &{
    display:none !important;
    transition: none !important;
  }
  @media screen and (min-width:1200px){
    &{
      cursor: default;
      display:block !important;
    }
  }
`
export default NavDesktopHeadLink;
