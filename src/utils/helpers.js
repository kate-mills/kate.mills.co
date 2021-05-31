const typeFormatter = (str) => {
  const  pattern = /s$/; // match s at the end of the word
  const  endsInS = str.match(pattern);
  let formatName = str.toLowerCase();
  if (endsInS){
    formatName = str.slice(0, -1);
  }
  else if (formatName==='ecommerce'){
    formatName = 'Shopping Cart'
  }
  return formatName;
}

const listOfColors =['yellow','#c7a0a1','turquoise','#ffc0cb','green','#ffa500','yellow','aliceblue','aqua','azure','grey','indianred', 'lavender','khaki','fuchsia','darksalmon','darkseagreen','darkslateblue','darkturquoise','gainsboro','dimgray', 'darkviolet','darkred','darkorchid','darkseagreen'
]


const getUniqueColors = (colors) =>{
  let tempColors = [...colors]
  let uniqueHexes= Array.from(new Set(tempColors.map((color)=>{
    return color.hex
  })))
  return uniqueHexes.map(hexId=>{
    return tempColors.find((color)=>color.hex === hexId)
  })
}


export {typeFormatter, getUniqueColors, listOfColors}
