import tinycolor from 'tinycolor2'
import randomColor from 'randomcolor'

const copyColorScheme = (lst)=>{
  let dt = getFmtDate()
  let hexes = [`Color scheme created ${dt}.\n`]
  let tempColors = [...lst]
  tempColors.forEach(clr=>{
    if(clr.onHold){
      hexes.push(`${clr.hex}\t🔒`)
    }else{
      hexes.push(clr.hex)
    }
  })
  hexes.push('\nCome back!\nkatemillsco.com/build-color-schemes\n')
  hexes = hexes.join('\n')
  navigator.clipboard.writeText(hexes)
  return
}

const default_colors = [
  { id: 0, hex: "#1ae0d9", clr: tinycolor("#1ae0d9"), onHold: false },
  { id: 1, hex: "#65f7df", clr: tinycolor("#65f7df"), onHold: false },
  { id: 2, hex: "#c5ffaf", clr: tinycolor("#c5ffaf"), onHold: false },
  { id: 3, hex: "#8fbf35", clr: tinycolor("#8fbf35"), onHold: false },
  { id: 4, hex: "#094d9b", clr: tinycolor("#094d9b"), onHold: false },
  { id: 5, hex: "#017720", clr: tinycolor("#017720"), onHold: false },
]

const getFmtDate = ()=>{
  const d = new Date()
  let mo = d.getMonth()+1
  let dy = d.getDate() 
  let yr = String(d.getFullYear()).slice(2)
  return `${mo}-${dy}-${yr}`
}


const getReadableColorFromHex = (hex) => {
  // used in discover new colors
  let tiny = tinycolor(hex)
  return tiny.isLight()?'black':'white'
}

const top_half_of_app_height = 125;

const getInitialPalette = (hue='blue') => {
  var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
  var i = Math.floor(Math.random() * 6)
  var light=randomColor({count:2,hue:rainbow[i],luminosity:'light'});
  var bright = randomColor({count:1, hue: rainbow[i], luminosity:'bright'})
  var dark = randomColor({count:2, hue:rainbow[i], luminosity:'dark'})
  var colors = [['light', light[0]],['bright', bright[0]], ['light', light[1]], ['dark', dark[0]], ['dark', dark[1]]];

  return colors.map((color, id)=>{
    const [luminosity, hex] = color
    let clr = tinycolor(hex)
    let textColor = clr.isLight()?'black':'white'
    return {
      rainbow:rainbow[i],
      hex,
      id,
      onHold: false,
      textColor,
      tiny: tinycolor(hex),
      luminosity,
      clr,
    }
  })
}

export {
  getInitialPalette,
  copyColorScheme,
  default_colors,
  getReadableColorFromHex,
  top_half_of_app_height,
}
