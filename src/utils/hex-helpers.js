export const idxZeroCheckBeforeFormat = (str) =>{
  let len = str.length
  let idxZeroErr = Boolean(len && (str[0]!=='#'))
  return ((idxZeroErr  && `#${str.toLowerCase()}`) || str.toLowerCase())
}


/*const getErrMsg = (len, clr) =>{
  if (len < 4){ //'#fff'
    return ((len === 1) ? `${clr}___`:(len===2) ? `${clr}__`:`${clr}_`)
  }
  else if(len === 6){ //'#fffff'
    return `${clr}_`
  }
  else if (len > 7){
    return 'Input is too long'
  }
  else if((len === 4)||
    (len === 5)||
    (len === 7)){
    return `${clr}`
  }
}
*/

const checkHexLength = (len)=>{
  return (len <= 3 || (len > 7) || (len === 6))
}
export const getAlertMsg = clr => {
  let testLength = checkHexLength(clr.length)
  if(!testLength){
    return clr
  }
  return ''
}
