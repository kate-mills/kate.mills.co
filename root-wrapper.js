import React from "react"

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
