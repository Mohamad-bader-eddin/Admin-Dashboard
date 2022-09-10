import React from 'react'
import Dropdown from '../Dropdowm/Dropdown'
import LanguageIcon from '@mui/icons-material/Language';
import { languages } from '../../Languages/Languages'
import { Typography, MenuItem } from '@mui/material';
import i18next from 'i18next';
import 'flag-icon-css/css/flag-icons.min.css'
import { hoverColor } from '../../Style/variable'
import jsCookie from 'js-cookie';
import { useTranslation } from 'react-i18next';

const activeStyle = {
    color: '#908787',
    '&:hover': {
        backgroundColor: hoverColor
    }
}

const style = {
    '&:hover': {
        backgroundColor: hoverColor
    }
}

const LanguageDropdown = () => {
    const LanguageCode = jsCookie.get('i18next')
    const { t } = useTranslation()
    return (
        <Dropdown title={t('Language')} icon={<LanguageIcon />}>
            {
                languages.map(lang => <MenuItem key={lang.country_code} onClick={() => i18next.changeLanguage(lang.code)}
                    sx={LanguageCode === lang.code ? activeStyle : style}>
                    <span className={`flag-icon flag-icon-${lang.country_code}`}></span>
                    <Typography variant='h6' sx={{ m: '0 10px' }}>{lang.name}</Typography>
                </MenuItem>)
            }
        </Dropdown>
    )
}

export default LanguageDropdown