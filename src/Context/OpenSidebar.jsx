import { createContext, useContext, useState } from "react";



const OpenSideBarContext = createContext()

export const OpenSideBarProvider = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState(true)

    return <OpenSideBarContext.Provider value={{ openSidebar, setOpenSidebar }}>
        {children}
    </OpenSideBarContext.Provider>
}

export const useOpenSidebar = () => {
    return useContext(OpenSideBarContext)
}