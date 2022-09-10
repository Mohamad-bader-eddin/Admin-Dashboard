import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDarkMode } from '../../Context/DarkMode';
import { Theme } from '../../Style/Theme';
import jsCookie from 'js-cookie';
import { useMuMediaQuery } from '../../Context/MuMediaQuery';
import Tooltips from '../Tooltip/Tooltips';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 25,
        top: 5,
    },
}));

const Dropdown = ({ title, icon, count, color, children }) => {
    const darkMode = useDarkMode()
    const language = jsCookie.get('i18next')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const mediaQuery = useMuMediaQuery()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Tooltips title={title}>
                <StyledBadge badgeContent={count} color="error"
                    onClick={handleClick}
                    size="small"
                    sx={{ alignSelf: 'center' }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={mediaQuery.mobileM ? { width: 32, height: 32, backgroundColor: 'transparent', color: `${color}`, m: '0 5px' } : { width: 32, height: 32, backgroundColor: 'transparent', color: `${color}`, m: '0 15px' }}>{icon}</Avatar>
                </StyledBadge>
            </Tooltips>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        backgroundColor: darkMode.darkMode ? Theme.dark.primary : Theme.light.primary,
                        color: darkMode.darkMode ? Theme.dark.text : Theme.light.text,
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },

                    },
                }}
                transformOrigin={{ horizontal: language === 'en' ? 'right' : 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: language === 'en' ? 'right' : 'left', vertical: 'bottom' }}
            >
                {children}
            </Menu>
        </>
    )
}

export default Dropdown