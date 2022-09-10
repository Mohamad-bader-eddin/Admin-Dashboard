import React from 'react'
import { A, LinkItem } from './SidebarLink.style'
import { Tooltip, tooltipClasses, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";
import { styled } from '@mui/material/styles';


const Tooltips = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: '18px',
    },
});

const SidebarLink = ({ data, openSidebar }) => {
    const { t } = useTranslation()
    return (
        <>
            {
                openSidebar ? <LinkItem>
                    <A to={data.path}>
                        <div className='content'>
                            <div className='icon'>{data.icon}</div>
                            <Typography variant='h6'>
                                {t(data.title)}
                            </Typography>
                        </div>
                    </A>
                </LinkItem> :
                    <LinkItem>
                        <Tooltips title={t(data.title)}>
                            <A to={data.path}>
                                <div className='content'>
                                    <div className='icon'>{data.icon}</div>
                                </div>
                            </A>
                        </Tooltips>
                    </LinkItem>
            }
        </>
    )
}

export default SidebarLink