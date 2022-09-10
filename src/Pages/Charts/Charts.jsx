import React from 'react'
import { useDarkMode } from '../../Context/DarkMode'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import { HomePage } from '../Home/Home.style'
import VerticalBarChart from '../../Components/VerticalBarChart/VerticalBarChart'
import { Box, Divider, Stack } from '@mui/material'
import LineChart from '../../Components/LineChart/LineChart'
import PieChart from '../../Components/PieChart/PieChart'
import DoughnutChart from '../../Components/DoughnutChart/DoughnutChart'

const MediaBox = ({ media, children }) => {
    return (
        <Box sx={{
            width: media.mobileL ? '100%' :
                media.tablet ? '80%' :
                    media.laptopL ? '60%' : '40%', m: 'auto'
        }}>
            {children}
        </Box>
    )
}

const Charts = () => {
    const darkMode = useDarkMode()
    const media = useMuMediaQuery()
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <Stack sx={{ p: '100px 0' }}>
                <MediaBox media={media}>
                    <DoughnutChart />
                </MediaBox>
                <Divider sx={{ backgroundColor: darkMode.darkMode ? 'rgba(255,255,255,0.26)' : 'rgba(0,0,0,0.26)' }} />
                <MediaBox media={media}>
                    <VerticalBarChart />
                </MediaBox>
                <Divider sx={{ backgroundColor: darkMode.darkMode ? 'rgba(255,255,255,0.26)' : 'rgba(0,0,0,0.26)' }} />
                <MediaBox media={media}>
                    <LineChart />
                </MediaBox>
                <Divider sx={{ backgroundColor: darkMode.darkMode ? 'rgba(255,255,255,0.26)' : 'rgba(0,0,0,0.26)' }} />
                <MediaBox media={media}>
                    <PieChart />
                </MediaBox>
            </Stack>
        </HomePage>
    )
}

export default Charts