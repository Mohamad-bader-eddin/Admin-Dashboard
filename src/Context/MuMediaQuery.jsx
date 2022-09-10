import { useMediaQuery } from "@mui/material";
import { createContext, useContext } from "react";
import { device } from '../Style/device'



const MediaQueryContext = createContext()

export const MediaQueryProvider = ({ children }) => {
    const mobileS = useMediaQuery(device.mobileS)
    const mobileM = useMediaQuery(device.mobileM)
    const mobileL = useMediaQuery(device.mobileL)
    const tablet = useMediaQuery(device.tablet)
    const laptop = useMediaQuery(device.laptop)
    const laptopL = useMediaQuery(device.laptopL)

    return <MediaQueryContext.Provider value={{ mobileS, mobileM, mobileL, tablet, laptop, laptopL }}>
        {children}
    </MediaQueryContext.Provider>
}


export const useMuMediaQuery = () => {
    return useContext(MediaQueryContext)
}

