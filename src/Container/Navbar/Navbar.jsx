import { IconButton, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { Content, Nav } from './Navbar.style'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ProfileDropdown from '../../Components/ProfileDropdown/ProfileDropdown';
import PendingTaskDropdown from '../../Components/PendingTaskDropdown/PendingTaskDropdown';
import NotificationDropdown from '../../Components/NotificationDropdown/NotificationDropdown';
import { useMuMediaQuery } from '../../Context/MuMediaQuery';
import { useDarkMode } from '../../Context/DarkMode';
import LanguageDropdown from '../../Components/LanguageDropdown/LanguageDropdown';
import { useOpenSidebar } from '../../Context/OpenSidebar';

const Navbar = () => {
    const darkMode = useDarkMode()
    const openSidebar = useOpenSidebar()
    const mediaQuery = useMuMediaQuery()
    const handleMode = () => {
        darkMode.setDarkMode(!darkMode.darkMode)
    }

    useEffect(() => {
        if (mediaQuery.tablet) {
            openSidebar.setOpenSidebar(false)
        }
    }, [mediaQuery, openSidebar, openSidebar.setOpenSidebar])

    return (
        <Nav openSidebar={openSidebar.openSidebar} darkMode={darkMode.darkMode}>
            <Content>
                {
                    mediaQuery.tablet ? null : <IconButton aria-label="dashboard" sx={{ color: '#fff' }} size='large' onClick={() => openSidebar.setOpenSidebar(!openSidebar.openSidebar)}>
                        <MenuIcon />
                    </IconButton>
                }
                <Stack justifyContent="space-between"
                    alignItems="center" direction='row' sx={{ color: '#fff' }} className='links'>
                    <ProfileDropdown />
                    <IconButton sx={{ color: '#fff' }} onClick={handleMode}>
                        {
                            darkMode.darkMode ? <LightModeIcon color='inherit' /> :
                                <DarkModeIcon color='inherit' />
                        }
                    </IconButton>
                    <NotificationDropdown />
                    <PendingTaskDropdown />
                    <LanguageDropdown />
                </Stack>
            </Content>
        </Nav>
    )
}

export default Navbar