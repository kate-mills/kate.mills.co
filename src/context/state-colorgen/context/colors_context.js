import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/colors_reducer'
import {default_colors} from '../helpers'
import randomColor from 'randomcolor'

import {
  INIT_RANDOM_COLORS,
  UPDATE_PENDING_COLORS,
  TOGGLE_SINGLE_COLOR,
} from '../actions'

const initialState = {
  all_colors: default_colors,
}

const ColorsContext = React.createContext()

export const ColorsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer, initialState)

  const resetAllColors = () => {
    var color = randomColor()
    try{
      dispatch({type: INIT_RANDOM_COLORS, payload: {hue: color}})
    }catch(err){
      console.log(err)
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
