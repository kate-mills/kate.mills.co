
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

