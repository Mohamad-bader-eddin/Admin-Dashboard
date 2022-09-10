import { Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'

const ReadField = ({ label, name }) => {
    const media = useMuMediaQuery()
    return (
        <Stack direction={media.mobileS ? 'column' : 'row'} alignItems='center' sx={{ mb: '15px' }}>
            <Chip label={label} color="info" />
            <Typography sx={{ m: '0 10px' }}>: {name}</Typography>
        </Stack>
    )
}

export default ReadField