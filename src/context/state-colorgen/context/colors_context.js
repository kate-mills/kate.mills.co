import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/colors_reducer'
import {default_colors} from '../helpers'
import tinycolor from 'tinycolor2'

import {
  INIT_RANDOM_COLORS,
  INIT_RANDOM_COLORS_ERROR,
  UPDATE_PENDING_COLORS,
  TOGGLE_SINGLE_COLOR,
} from '../actions'

const initialState = {
  all_colors: default_colors,
  default_colors,
  theme: {
    spaColors: [
      {theme: 'spa', tiny: tinycolor('#eeddcc')}, // Pink
      {theme: 'spa', tiny:tinycolor('#b4b387')},  // Olive
      {theme: 'spa', tiny: tinycolor('#d3c38b')}, // yellowOlivish 
      {theme: 'spa', tiny: tinycolor('#778aab')}, // Blue
      {theme: 'spa', tiny: tinycolor('#677988')}, // dkBlue
      {theme: 'spa', tiny: tinycolor('#8f9ea2')}, // medBlue
      {theme: 'spa', tiny: tinycolor('#a8b8c3')}, // litBlue
      {theme: 'spa', tiny: tinycolor('#bcaaaa')}, // Beige
      {theme: 'spa', tiny: tinycolor('#ddbb98')}, // Peach
      {theme: 'spa', tiny: tinycolor('#988693')}, // Purplish
      {theme: 'spa', tiny: tinycolor('#82967b')}, // darkGreenish
      {theme: 'spa', tiny: tinycolor('#9fb996')}, // mediGreenish
      {theme: 'spa', tiny: tinycolor('#c0cfaa')}, // litGreenish
      {theme: 'spa', tiny: tinycolor('#adb3a9')}, // greyish
      {theme: 'spa', tiny: tinycolor('#96b2a6')}, // prettyGreen
      {theme: 'spa', tiny: tinycolor('#edeee8')}, // white
      {theme: 'spa', tiny: tinycolor('#e0dcd0')}, // taupish
    ],
  }
}

const ColorsContext = React.createContext()

export const ColorsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer, initialState)

  const resetAllColors = (clr) => {
    try{
      dispatch({type: INIT_RANDOM_COLORS})
    }catch(err){
      dispatch({type: INIT_RANDOM_COLORS_ERROR, payload: err})
    }
  }
  const updatePendingColors = (colors) => {
    dispatch({type: UPDATE_PENDING_COLORS, payload:{colors}})
  }
  const toggleSingleColor = (id) => {
    dispatch({type: TOGGLE_SINGLE_COLOR, payload: {id, colors: [...state.all_colors]}})
  }
  
  useEffect(()=>{
    resetAllColors()
  }, [])

  return (
    <ColorsContext.Provider value={{
      ...state,
      updatePendingColors,
      toggleSingleColor,
      resetAllColors,
      }}>
      {children}
    </ColorsContext.Provider>
  )
}
// make sure use
export const useColorsContext = () => {
  return useContext(ColorsContext)
}
