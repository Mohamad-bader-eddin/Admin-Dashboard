import React from 'react'
import Dropdown from '../Dropdowm/Dropdown'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, MenuItem } from '@mui/material';
import { Theme } from '../../Style/Theme';
import { useDarkMode } from '../../Context/DarkMode';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltips from '../Tooltip/Tooltips';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductActionDropdown = ({ id, setOpenDialog }) => {
    const darkMode = useDarkMode()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const handleUpdate = () => {
        navigate(`/product/${id}`)
    }
    const handleDelete = () => {
        setOpenDialog(true)
    }
    return (
        <Dropdown title={t('Action')} icon={<MoreVertIcon />} color={darkMode.darkMode ? Theme.dark.text : Theme.light.text}>
            <MenuItem>
                <Tooltips title={t('Edit')}>
                    <IconButton variant='contained' color='info' onClick={handleUpdate}>
                        <EditIcon />
                    </IconButton>
                </Tooltips>
            </MenuItem>
            <MenuItem>
                <Tooltips title={t('Delete')}>
                    <IconButton variant='contained' color='error' onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltips></MenuItem>
        </Dropdown>
    )
}

export default ProductActionDropdown