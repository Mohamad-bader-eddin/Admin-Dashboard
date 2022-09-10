import React from 'react'
import { useDarkMode } from '../../Context/DarkMode'
import { Theme } from '../../Style/Theme';
import { Paper as Pep } from '@mui/material'

const Paper = ({ children, height }) => {
    const darkMode = useDarkMode()
    return (
        <Pep elevation={5} sx={{
            backgroundColor: darkMode.darkMode ? Theme.dark.card : Theme.light.card,
            color: darkMode.darkMode ? Theme.dark.text : Theme.light.text,
            boxShadow: darkMode.darkMode ? `${Theme.dark.shadow} 0px 10px 10px -5px` : '',
            m: '10px 0',
            minHeight: height ? height : '',
            '&:hover': {
                boxShadow: `${darkMode.darkMode ? Theme.dark.shadow : Theme.light.shadow} 0px 22px 70px 4px`
            }
        }}>
            {children}
        </Pep>
    )
}

export default Paper