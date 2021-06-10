import tinycolor from 'tinycolor2'

const copyColorScheme = (lst)=>{
  let dt = getFmtDate()
  let hexes = [`RGB hex codes. Color scheme created ${dt}.\n`]
  let tempColors = [...lst]
  tempColors.forEach(clr=>{
    if(clr.onHold){
      hexes.push(`${clr.hex}  🔒`)
    }else{
      hexes.push(clr.hex)
    }
  })
  hexes.push('\nCome back!\nallydigitalsolutions.com/build-color-schemes\n')
  hexes = hexes.join('\n')
  navigator.clipboard.writeText(hexes)
  return
}

const default_colors = [
  { id: 0, hex: "#1ae0d9", onHold: false },
  { id: 1, hex: "#65f7df", onHold: false },
  { id: 2, hex: "#c5ffaf", onHold: false },
  { id: 3, hex: "#8fbf35", onHold: false },
  { id: 4, hex: "#094d9b", onHold: false },
  { id: 5, hex: "#017720", onHold: false },
]

const getFmtDate = ()=>{
  const d = new Date()
  let mo = d.getMonth()+1
  let dy = d.getDate() 
  let yr = String(d.getFullYear()).slice(2)
  return `${mo}-${dy}-${yr}`
}

const getRandomHex=()=> {
  let hexvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  let hex = "#"
  for (let i = 0; i < 6; i++){
    let rIdx = Math.floor(Math.random() * hexvalues.length)
    let rVal = hexvalues[rIdx];
    hex += rVal
  }
  console.log(hex)
  return hex
}

const getRandomInt = (max) => {
// will never return max
  return Math.floor(Math.random() * max) 
}

const getReadableColorFromHex = (hex) => {
  let tiny = tinycolor(hex)
  return tiny.isLight()?'black':'white'
}

const spaColors = [
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
]

const top_half_of_app_height = 114;

export {
  copyColorScheme,
  default_colors,
  getRandomHex,
  getRandomInt,
  getReadableColorFromHex,
  spaColors,
  top_half_of_app_height,
}
