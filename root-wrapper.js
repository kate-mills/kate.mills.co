import React from "react"

import './src/components/layout.css'

import {UnsplashProvider} from './src/context/unsplash'
import { AppProvider } from './src/context/context';

export const wrapRootElement = ({element}) => {
  return (
    <>
    <AppProvider>
    <UnsplashProvider>
      {element}
    </UnsplashProvider>
    </AppProvider>
    </>
  )
}
