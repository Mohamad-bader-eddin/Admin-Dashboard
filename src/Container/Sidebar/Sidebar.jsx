import React from 'react'
import { Links, SideBar } from './Sidebar.style'
import { Typography } from '@mui/material'
import SidebarLink from '../../Components/SidebarLink/SidebarLink'
import { SidebarData } from './SidebarData'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useDarkMode } from '../../Context/DarkMode'
import { useOpenSidebar } from '../../Context/OpenSidebar'

const Sidebar = () => {
    const darkMode = useDarkMode()
    const openSidebar = useOpenSidebar()
    return (
        <SideBar openSidebar={openSidebar.openSidebar} darkMode={darkMode.darkMode}>
            {
                openSidebar.openSidebar &&
                <Typography variant='h6' sx={{ color: '#ded9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DashboardIcon sx={{ m: '0 10px' }} />  Admin Panal</Typography>
            }
            <Links>
                {
                    SidebarData.map(data => <SidebarLink data={data} key={data.id} openSidebar={openSidebar.openSidebar} />)
                }
            </Links>
        </SideBar>
    )
}

export default Sidebar