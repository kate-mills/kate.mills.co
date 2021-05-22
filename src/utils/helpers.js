export  const typeFormatter = (str) => {
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
