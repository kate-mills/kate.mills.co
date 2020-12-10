import React, {useState} from "react"
import sublinks from "../constants/links"

const SidebarContext = React.createContext();


const SidebarProvider = ({children}) =>{
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [links, setLinks] = useState(sublinks);

  const uniqueLinks = [...new Set(links.map(link =>link.page))]

  return(
    <SidebarContext.Provider value={{links, isSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export {SidebarContext, SidebarProvider};
