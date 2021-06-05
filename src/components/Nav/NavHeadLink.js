import * as React from 'react'
import {Link} from 'gatsby'
import {useGlobalContext} from '../../context/context'

import styled from 'styled-components'

const noClk=(e)=>{e.preventDefault()}


const NavDesktopHeadLink = ({className, lnk, hoverFn}) =>{
  return (
    ((lnk.links.length > 0)?
      <HeadLinkWithChildren className={className} lnk={lnk} hoverFn={hoverFn}/>
      :<SimpleLink className={className} lnk={lnk}/>
    )
  )
}

export default styled(NavDesktopHeadLink)`
  pointer-events: unset;
`

const SimpleLink = ({className, lnk}) => {
  const {closeSubmenu } = useGlobalContext()
  return (<Link to={lnk.path} className={className} onMouseOver={closeSubmenu}>{lnk.page}</Link>
  )
}

const HeadLinkWithChildren = ({className, lnk, hoverFn}) => {
  return (
    <Link
      to={lnk.path}
      onMouseOver={hoverFn}
      onClick={noClk}
      className={className}>
      {lnk.page}
    </Link>
  )
}
