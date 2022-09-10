import React from 'react'
import Widget from '../../Components/Widget/Widget'
import { Content } from './Widgets.style'
import { Box, Container } from '@mui/material'
import { WidgetData } from './WidgetsData'

const Widgets = () => {
    return (
        <Box sx={{ p: '100px 0 50px 0' }}>
            <Container>
                <Content>
                    {
                        WidgetData.map(item => <Widget key={item.id} item={item} />)
                    }
                </Content>
            </Container>
        </Box>
    )
}

export default Widgets