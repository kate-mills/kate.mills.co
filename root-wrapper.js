import React from "react"

import "fontsource-montserrat/400-normal.css"
import './src/components/layout.css'
import { AppProvider } from './src/context/context';

export const wrapRootElement = ({element}) => {
  return (
    <>
    <AppProvider>
      {element}
    </AppProvider>
    </>
  )
}
