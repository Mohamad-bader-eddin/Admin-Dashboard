import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dropdown from '../Dropdowm/Dropdown';
import { Avatar, Stack, Typography } from '@mui/material';
import NotifiImage1 from '../../Assets/in6.jpg'
import NotifiImage2 from '../../Assets/in1.jpg'
import NotifiImage3 from '../../Assets/in2.jpg'
import { useDarkMode } from '../../Context/DarkMode';
import { Theme } from '../../Style/Theme';
import { hoverColor } from '../../Style/variable';
import { useTranslation } from 'react-i18next';



const NotificationDropdown = () => {
    const darkMode = useDarkMode()
    const { t } = useTranslation()
    return (
        <Dropdown title={t('Notification')} icon={<NotificationsIcon />} count={3}>
            <MenuItem>
                {t('You_have')} 3 {t('new_notification')}
            </MenuItem>
            <Divider />
            <MenuItem
                sx={{
                    '&:hover': {
                        backgroundColor: hoverColor
                    }
                }}>
                <Stack direction='row' alignItems='center'>
                    <Avatar src={NotifiImage1} />
                    <Stack>
                        <Typography variant='h6' sx={{ m: '0 10px' }}> {t('Lorem_ipsum_dolor')}</Typography>
                        <Typography variant='button' sx={{ color: darkMode.darkMode ? Theme.dark.secondery : Theme.light.secondery, m: '0 10px' }}>{t('1_hour')} {t('ago')}</Typography>
                    </Stack>
                </Stack>
            </MenuItem>
            <MenuItem sx={{
                '&:hover': {
                    backgroundColor: hoverColor
                }
            }}>
                <Stack direction='row' alignItems='center'>
                    <Avatar src={NotifiImage2} />
                    <Stack>
                        <Typography variant='h6' sx={{ m: '0 10px' }}> {t('Lorem_ipsum_dolor')}</Typography>
                        <Typography variant='button' sx={{ color: darkMode.darkMode ? Theme.dark.secondery : Theme.light.secondery, m: '0 10px' }}>{t('2_hours')} {t('ago')}</Typography>
                    </Stack>
                </Stack>
            </MenuItem>
            <MenuItem sx={{
                '&:hover': {
                    backgroundColor: hoverColor
                }
            }}>
                <Stack direction='row' alignItems='center'>
                    <Avatar src={NotifiImage3} />
                    <Stack>
                        <Typography variant='h6' sx={{ m: '0 10px' }}> {t('Lorem_ipsum_dolor')}</Typography>
                        <Typography variant='button' color='GrayText' sx={{ color: darkMode.darkMode ? Theme.dark.secondery : Theme.light.secondery, m: '0 10px' }}>3 {t('hours')} {t('ago')}</Typography>
                    </Stack>
                </Stack>
            </MenuItem>
        </Dropdown>
    )
}

export default NotificationDropdown