import {
  INIT_RANDOM_COLORS,
  INIT_RANDOM_COLORS_ERROR,
  UPDATE_PENDING_COLORS,
  TOGGLE_SINGLE_COLOR,
} from '../actions'
import {getBestTextColor} from '../helpers'
import  randomColor from 'randomcolor'
import tinycolor from 'tinycolor2'


const colors_reducer = (state, action) => {

  if(action.type === UPDATE_PENDING_COLORS){
    const {colors} = action.payload
    const  all_colors = colors.map((clr, id)=>{ 
      if (clr.onHold){
        return {...clr}
      } else{
        let hex = randomColor({hue:'random'}) 
        return{...clr, hex, textColor: getBestTextColor(hex)}
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
    const {hue} = action.payload
    let clrs = randomColor({hue, count: 5})
    const all_colors = clrs.map((hex, id) => {
      const tiny = tinycolor(hex)
      const textColor = tiny.isLight()?'black':'white'
      return {hex, id, onHold:false, textColor}
    })
    return {...state,all_colors}
  }
  if(action.type === INIT_RANDOM_COLORS_ERROR){
    return {...state, all_colors:state.default_colors}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default colors_reducer
