import React from "react"

import './src/components/layout.css'

import { AppProvider } from './src/context/context';
import { ColorsProvider } from   './src/context/state-colorgen/context/colors_context'
import {UnsplashProvider} from './src/context/unsplash'
//import { ColorProvider } from './src/context/colors'

export const wrapRootElement = ({element}) => {
  return (
    <>
    <AppProvider>
      <UnsplashProvider>
        <ColorsProvider>
          {element}
        </ColorsProvider>
      </UnsplashProvider>
    </AppProvider>
    </>
  )
}
