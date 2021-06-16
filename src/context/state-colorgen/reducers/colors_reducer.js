import {
  INIT_RANDOM_COLORS,
  INIT_RANDOM_COLORS_ERROR,
  UPDATE_PENDING_COLORS,
  TOGGLE_SINGLE_COLOR,
} from '../actions'

import randomColor from 'randomcolor'
import tinycolor from 'tinycolor2'


const colors_reducer = (state, action) => {

  if(action.type === UPDATE_PENDING_COLORS){
    const {colors} = action.payload
    const  all_colors = colors.map((color, id)=>{
      if (color.onHold){
        return {...color}
      } else{
        let hex = randomColor({luminosity:color.luminosity})
        let clr = tinycolor(hex)
        let textColor = clr.isLight()?'black':'white'
        return{...color, clr, hex, textColor}
      }
    })
    return { ...state, all_colors}
  }
  if(action.type === TOGGLE_SINGLE_COLOR){
    const {id, colors} = action.payload
    let tempColors = colors.map((clr, idx)=>{
      if(id !== idx) return clr
      return {...clr, onHold:!clr.onHold}
    })
    return {...state, all_colors:tempColors}
  }
  if(action.type === INIT_RANDOM_COLORS){
    const {theme:{palette}} = state
    return {...state,all_colors:palette, theme:{...state.theme}}
  }
  if(action.type === INIT_RANDOM_COLORS_ERROR){
    return {...state, all_colors:state.default_colors}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default colors_reducer
