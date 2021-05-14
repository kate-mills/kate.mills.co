import React, { useState, useContext } from 'react';
import sublinks from '../constants/links';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});


  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    if(page.links.length > 0){
      setIsSubmenuOpen(true);
    } else{
      setIsSubmenuOpen(false)
    }
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const [height, setHeight] = React.useState(0);

  React.useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setHeight(window.pageYOffset);
    })
    return ()=>{
      return window.removeEventListener('scroll', ()=>{})
    }
  }, [])


  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
        height,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

