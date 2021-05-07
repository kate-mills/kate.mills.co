import React from 'react'

import {Telephone} from '../constants/contact-info'

export default (props)=>{
  return(
    <a href="tel:707-226-8106" title="Call or Text" className={`${props.className} phone`}>{Telephone}</a>
  )
}



