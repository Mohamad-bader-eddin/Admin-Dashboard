import React from 'react'
import Paper from '../Paper/Paper'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import jsCookie from 'js-cookie'

const TimeItem = ({ children }) => <TimelineItem sx={{
    '&::before': {
        flex: 0,
        padding: 0
    }
}}>
    {children}
</TimelineItem>

const Activity = () => {
    const { t } = useTranslation()
    const currentLanguage = jsCookie.get('i18next')
    return (
        <Box>
            <Paper height='368px'>
                <Typography variant='h5' sx={{ p: '10px 15px', m: '10px 0' }}>{t('Activity')}</Typography>
                <Timeline position={currentLanguage === 'en' ? 'right' : 'left'}>
                    <TimeItem>
                        <TimelineSeparator>
                            <TimelineDot color='error' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant='subtitle2' color='GrayText'>5 {t('min_ago')}</Typography>
                            <Typography>{t('Williams_has_just_joined_Project')} X</Typography>
                        </TimelineContent>
                    </TimeItem>
                    <TimeItem>
                        <TimelineSeparator>
                            <TimelineDot color='info' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant='subtitle2' color='GrayText'>25 {t('min_ago')}</Typography>
                            <Typography>{t('Jane_has_sent_a_request_for_access')}</Typography>
                        </TimelineContent>
                    </TimeItem>
                    <TimeItem>
                        <TimelineSeparator>
                            <TimelineDot color='warning' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant='subtitle2' color='GrayText'>30 {t('min_ago')}</Typography>
                            <Typography>{t('Kate_added_you_to_her_team')}</Typography>
                        </TimelineContent>
                    </TimeItem>
                    <TimeItem>
                        <TimelineSeparator>
                            <TimelineDot color='success' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant='subtitle2' color='GrayText'>40 {t('min_ago')}</Typography>
                            <Typography>{t('John_has_finished_his_task')}</Typography>
                        </TimelineContent>
                    </TimeItem>
                </Timeline>
            </Paper>
        </Box>
    )
}

export default Activity