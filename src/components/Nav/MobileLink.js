/* Only mobile - on wider screen (desktop) user can hover and see SubMenu */
import * as React from 'react'
import {Link} from 'gatsby'

import styled from 'styled-components'


const MobileLink= ({className, lnk}) =>{
  return (
    <Link to={lnk.url} className={`mobile-link ${lnk.cls} ${className}`}>{lnk.label}</Link>
  )
}

export default styled(MobileLink)`
  &.mobile-link {
    display:unset;
    margin-left: 0;
  }
  &.mobile-link:hover{
    background: var(--primaryBlack2);
  }
  &.mobile-link.no-mobile{
    display:none;
  }
  @media screen and (min-width: 1200px) {
    ul &.mobile-link{ display:none; }
  }

`
