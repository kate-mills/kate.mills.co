export const getServiceCategories = (services) => {
  let tempServices = services.map(service => {
    return service.data.category
  });
  let tempCategories = new Set(tempServices);
  let categories = Array.from(tempCategories);
  //categories = ['all', ...categories]
  return categories;
};


export const filterForFeaturedServices = (services) =>{
  return services.filter(service => { return service.data.featured === true; })
};

export  const typeFormatter = (str) => {
    const  pattern = /s$/; // match s at the end of the word
    const  endsInS = str.match(pattern); 
    let formatName = str.toLowerCase();
    if (endsInS){
      formatName = str.slice(0, -1);
    }
    else if (formatName=== 'e-commerce'){
      formatName = 'Shopping Cart'
    }
    else if (formatName==='ecommerce'){
      formatName = 'Shopping Cart'
    }
    return formatName;
  }

