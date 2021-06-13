import tinycolor from 'tinycolor2'
import randomColor from 'randomcolor'


//var reds=randomColor({count:100,hue:'red',luminosity:'random'});
//var oranges=randomColor({count:100,hue:'orange',luminosity:'random'});
//var yellows=randomColor({count:100,hue:'yellow',luminosity:'random'});
//var greens=randomColor({count:100,hue:'green',luminosity:'random'});
//var blues=randomColor({count:100,hue:'blue',luminosity:'random'});
//var purples=randomColor({count:100,hue:'purple',luminosity:'random'});

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

const getRandomHex=()=> {
  console.log('#'+(~~(Math.random()*(1<<24))).toString(16))
  return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
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

const top_half_of_app_height = 119;

const getInitialPalette = (hue='blue') => {
  var rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
  var i = getRandomInt(6)
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
  getRandomHex,
  getRandomInt,
  getReadableColorFromHex,
  spaColors,
  top_half_of_app_height,
}
