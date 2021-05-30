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


const getUniqueColors = (colors) =>{
  let tempColors = [...colors]
  let uniqueHexes= Array.from(new Set(tempColors.map((color)=>{
    return color.hex
  })))
  return uniqueHexes.map(hexId=>{
    return tempColors.find((color)=>color.hex === hexId)
  })
}


export {typeFormatter, getUniqueColors}
