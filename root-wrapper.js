import React from "react"

import './src/components/layout.css'

import { AppProvider } from './src/context/context';
import {UnsplashProvider} from './src/context/unsplash'
import { ColorProvider } from './src/context/colors';

export const wrapRootElement = ({element}) => {
  return (
    <>
    <AppProvider>
      <UnsplashProvider>
        <ColorProvider>
          {element}
        </ColorProvider>
      </UnsplashProvider>
    </AppProvider>
    </>
  )
}
