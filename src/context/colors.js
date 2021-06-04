import React, { useState, useContext } from 'react';
import ColorScheme from 'color-scheme'
import {startingColors} from '../constants/colors'

const ColorContext = React.createContext()

const ColorProvider = ({children}) => {
  const scheme = new ColorScheme()
  
  const [colorList, setColorList] = useState((startingColors))



  const mapThroughColors = (clrs) =>{
    return clrs.map((clr, idx)=>{
      const oldColor = colorList.find(item => item.id === idx)
      if(oldColor && oldColor.active){
        console.log('active', oldColor.active)
        return oldColor
      }else{
        return {hex:clr, id: idx, active: false}
      }
    })
  }

  const updateColorList = async (hue=224, schName='triade', variation='soft'
  )=>{
    scheme.from_hue(hue)
      .scheme(schName).variation(variation)
    let colors = scheme.colors()
    let mpClr = await mapThroughColors(colors)
    setColorList((prev)=>{
      return mpClr
    }, console.log('new colors', colorList))
  }

  return (
    <ColorContext.Provider
      value={{
        scheme,
        colorList,
        updateColorList,
      }}>{children}
    </ColorContext.Provider>
  )
}

export const useColorContext = () => {
  return useContext(ColorContext);
};

export { ColorContext, ColorProvider };



//var xyz=colors.map((clr, idx) =>{return {hex: clr,id: idx}})
