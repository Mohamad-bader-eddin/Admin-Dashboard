import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={'100%'} height={250} />
            <Skeleton variant="rounded" width={'100%'} height={250} />
        </Stack>
    )
}

export default Loading