import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useMuMediaQuery } from '../../Context/MuMediaQuery'
import Paper from '../Paper/Paper'
import { ContactData } from './ContactData'

const Contact = () => {
    const media = useMuMediaQuery()
    const { t } = useTranslation()
    return (
        <Box>
            <Paper height='368px'>
                <Box sx={{ p: '10px' }}>
                    <Typography variant='h5'>{t('Contact')}</Typography>
                    {
                        ContactData.map(item =>
                            <Stack direction={media.mobileS ? 'column' : 'row'} justifyContent='space-between' alignItems='center' sx={{ m: '15px 0' }} key={item.id}>
                                <Box>
                                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: '15px' }}>
                                        <Box sx={{ m: '0 10px' }}>
                                            <Avatar src={item.img} />
                                        </Box>
                                        <Box>
                                            <Typography variant='button' sx={{ fontSize: media.mobileL ? '14px' : '' }}>{item.name}</Typography>
                                            <Typography variant='subtitle2' color='GrayText' sx={{ fontSize: media.mobileL ? '12px' : '' }}>{item.email}</Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box sx={{ p: media.mobileL ? '0 2px' : '0 10px', fontWeight: 'bold', fontSize: media.mobileL ? '14px' : '' }}>{item.position}</Box>
                            </Stack>
                        )
                    }
                </Box>
            </Paper>
        </Box>
    )
}

export default Contact