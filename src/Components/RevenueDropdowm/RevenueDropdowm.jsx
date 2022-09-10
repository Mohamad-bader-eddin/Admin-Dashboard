import React from 'react'
import Dropdown from '../Dropdowm/Dropdown'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem } from '@mui/material';
import { Theme } from '../../Style/Theme';
import { useDarkMode } from '../../Context/DarkMode';
import { useTranslation } from 'react-i18next';

const RevenueDropdowm = () => {
    const { t } = useTranslation()
    const darkMode = useDarkMode()
    return (
        <Dropdown title={t('more')} icon={<MoreVertIcon />} color={darkMode.darkMode ? Theme.dark.text : Theme.light.text}>
            <MenuItem>
                {t('See_details')}
            </MenuItem>
        </Dropdown>
    )
}

export default RevenueDropdowm