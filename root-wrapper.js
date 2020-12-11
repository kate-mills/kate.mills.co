import React from "react"

import "fontsource-montserrat/400-normal.css"
import "fontsource-raleway/300-normal.css"
import './src/components/layout.css'

export const wrapRootElement = ({element}) => {
  return (
    <>
      {element}
    </>
  )
}
