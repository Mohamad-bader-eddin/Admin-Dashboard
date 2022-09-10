import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useDarkMode } from '../../Context/DarkMode';
import { getUsers } from '../../Redux/userSlice';
import { HomePage } from '../Home/Home.style';
import Paper from '../../Components/Paper/Paper'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltips from '../../Components/Tooltip/Tooltips';
import { useNavigate } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading';
import DraggableDialog from '../../Components/Dialog/DraggableDialog';
import { Theme } from '../../Style/Theme';
import AlertAction from '../../Components/Alert/AlertAction';
import { useTranslation } from 'react-i18next';
import { useOpenSidebar } from '../../Context/OpenSidebar';

const UserTable = () => {
    const darkMode = useDarkMode()
    const dispatch = useDispatch()
    const openSidebar = useOpenSidebar()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { loading, users, error } = useSelector(state => state.user)
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [userId, setUserId] = useState('');
    useEffect(() => {
        dispatch(getUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleView = id => {
        navigate(`/user/${id}`)
    }
    const handleUpdate = id => {
        navigate(`/update-user/${id}`)
    }
    const handleDelete = id => {
        setOpen(true)
        setUserId(id)
    }

    const userColumn = [
        { field: "id", headerName: t('Tracking_ID'), width: openSidebar.openSidebar ? 115 : 250 },
        {
            field: "name",
            headerName: t("Name"),
            width: 300,
            renderCell: (params) => {
                return (
                    <Stack direction="row" alignItems="center">
                        <Box sx={{ m: "0 10px" }}>
                            <Avatar src={params.row.file ? params.row.file : ""} />
                        </Box>
                        <Box>
                            <Typography>{params.row.name}</Typography>
                        </Box>
                    </Stack>
                );
            },
        },
        {
            field: "email",
            headerName: t("Email"),
            width: 250,
        },
        {
            field: "address",
            headerName: t("Address"),
            width: 150,
        },
        {
            field: "phone",
            headerName: t("Phone"),
            width: 150,
        },
        {
            field: "birthDate",
            headerName: t("BirthDate"),
            width: 120,
        },
    ]
    const actionColumn = [{
        field: 'action', headerName: t('Action'), width: 150, renderCell: (params) => {
            return (<Stack direction='row' alignItems='center'>
                <Tooltips title={t('View')}>
                    <IconButton variant='contained' color='info' onClick={() => handleView(params.row.id)}>
                        <RemoveRedEyeIcon />
                    </IconButton>
                </Tooltips>
                <Tooltips title={t('Edit')}>
                    <IconButton variant='contained' color='warning' onClick={() => handleUpdate(params.row.id)}>
                        <EditIcon />
                    </IconButton>
                </Tooltips>
                <Tooltips title={t('Delete')}>
                    <IconButton variant='contained' color='error' onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltips>
            </Stack>)
        }
    }]
    return (
        <HomePage darkMode={darkMode.darkMode}>
            {
                error && !loading ? <AlertAction open={openAlert} setOpen={setOpenAlert} iserror={true}>
                    {error}
                </AlertAction>
                    : !loading ?
                        <AlertAction open={openAlert} setOpen={setOpenAlert} iserror={false}>
                            {t('Delete_User_done_successful')}
                        </AlertAction> : null
            }
            <DraggableDialog open={open} setOpen={setOpen} setOpenAlert={setOpenAlert} userId={userId} />
            <Box sx={{ height: '100vh', p: '100px 20px' }}>
                {
                    error ? <Box>{error}</Box>
                        : loading ? <Loading /> :
                            <Paper>
                                <Box sx={{ height: '550px' }}>
                                    <DataGrid
                                        sx={{
                                            color: darkMode.darkMode ? Theme.dark.text : Theme.light.text,
                                            direction: 'ltr',
                                            '& .css-rtrcn9-MuiTablePagination-root': {
                                                color: darkMode.darkMode ? Theme.dark.text : Theme.light.text
                                            },
                                            '& .css-zylse7-MuiButtonBase-root-MuiIconButton-root.Mui-disabled': {
                                                color: darkMode.darkMode ? 'rgba(255, 255, 255, 0.26)' : 'rgba(0, 0, 0, 0.26)'
                                            },
                                            '& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root': {
                                                color: darkMode.darkMode ? 'rgba(255, 255, 255, 0.56)' : 'rgba(0, 0, 0, 0.56)'
                                            }
                                        }}
                                        rows={users}
                                        columns={userColumn.concat(actionColumn)}
                                        pageSize={7}
                                        rowsPerPageOptions={[7]}
                                        disableSelectionOnClick
                                    />
                                </Box>
                            </Paper>
                }
            </Box>
        </HomePage>
    )
}

export default UserTable