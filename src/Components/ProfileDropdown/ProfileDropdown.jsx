import React from 'react'
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Dropdown from '../Dropdowm/Dropdown';
import { useDarkMode } from '../../Context/DarkMode';
import { Theme } from '../../Style/Theme';
import ImageAvater from '../../Assets/in7.jpg'
import { hoverColor } from '../../Style/variable';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import jsCookie from 'js-cookie';

const ProfileDropdown = () => {
    const darkMode = useDarkMode()
    const { t } = useTranslation()
    const LanguageCode = jsCookie.get('i18next')

    return (
        <Dropdown title={t('Account_settings')} icon={<SettingsIcon />}>
            <MenuItem sx={{
                '&:hover': {
                    backgroundColor: hoverColor
                }
            }}>
                <Avatar src={ImageAvater} />
                <Typography variant='button' sx={LanguageCode === 'ar' ? { marginRight: '15px' } : null}>{t('My_account')}</Typography>
            </MenuItem>
            <Divider />
            <MenuItem sx={{
                '&:hover': {
                    backgroundColor: hoverColor
                }
            }}>
                <ListItemIcon sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }}>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                {t('Add_another_account')}
            </MenuItem>
            <MenuItem sx={{
                '&:hover': {
                    backgroundColor: hoverColor
                }
            }}>
                <ListItemIcon sx={{ color: darkMode.darkMode ? Theme.dark.text : Theme.light.text }}>
                    <Logout fontSize="small" />
                </ListItemIcon>
                {t('Logout')}
            </MenuItem>
        </Dropdown>
    )
}

export default ProfileDropdown