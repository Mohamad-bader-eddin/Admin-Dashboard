import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import StorageIcon from '@mui/icons-material/Storage';
import { pendingTaskData } from './pendingTasksData'
import { Progress, SkillName } from './PendingTaskDropdown.style';
import Dropdown from '../Dropdowm/Dropdown';
import { hoverColor } from '../../Style/variable';
import { useTranslation } from 'react-i18next';


const PendingTaskDropdown = () => {
    const { t } = useTranslation()

    return (
        <Dropdown title={t('Pending_Tasks')} icon={<StorageIcon />} count={4}>
            <MenuItem >
                {t('You_have')} 4 {t('Pending_Tasks')}
            </MenuItem>
            <Divider />
            {
                pendingTaskData.map(task => <MenuItem key={task.id} sx={{
                    flexWrap: 'wrap',
                    '&:hover': {
                        backgroundColor: hoverColor
                    }
                }}>
                    <SkillName>{task.name}<span>{task.percentage}</span></SkillName>
                    <Progress><span style={{ width: task.percentage, backgroundColor: task.bg }}></span></Progress>
                </MenuItem>)
            }
        </Dropdown>
    )
}

export default PendingTaskDropdown