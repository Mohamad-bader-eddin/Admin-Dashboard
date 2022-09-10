import { Avatar, Box, Container, Stack } from '@mui/material'
import React from 'react'
import Paper from '../../Components/Paper/Paper'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import Loading from '../../Components/Loading/Loading'

const ShowItem = ({ loading, file, children }) => {
    const media = useMuMediaQuery()
    return (
        <Container>
            {
                loading ? <Loading /> :
                    <Paper>
                        <Box sx={{ p: '20px' }}>
                            <Stack direction={media.tablet ? 'column' : 'row'} alignItems='center' justifyContent='space-around'>
                                <Box sx={{ mb: media.tablet ? '30px' : '' }}>
                                    <Avatar src={file} variant='rounded' sx={{
                                        width: media.mobileL ? '175px' : media.laptop ? '250px' : '350px'
                                        , height: media.mobileL ? '100px' : '250px'
                                    }} />
                                </Box>
                                <Box>
                                    {children}
                                </Box>
                            </Stack>
                        </Box>
                    </Paper>
            }
        </Container>
    )
}

export default ShowItem
