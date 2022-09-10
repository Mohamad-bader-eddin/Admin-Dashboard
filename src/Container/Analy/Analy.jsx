import { Container } from '@mui/material'
import React from 'react'
import AnlayChart from '../../Components/AnlayChart/AnlayChart'
import Revenue from '../../Components/Revenue/Revenue'
import { Box } from './Analy.style'

const Analy = () => {
    return (
        <Container>
            <Box>
                <Revenue />
                <AnlayChart />
            </Box>
        </Container>
    )
}

export default Analy