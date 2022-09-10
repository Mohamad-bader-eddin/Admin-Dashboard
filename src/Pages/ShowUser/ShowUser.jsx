import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ReadField from '../../Components/ReadField/ReadField'
import ShowItem from '../../Container/ShowItem/ShowItem'
import { useDarkMode } from '../../Context/DarkMode'
import { getUsers } from '../../Redux/userSlice'
import { HomePage } from '../Home/Home.style'

const ShowUser = () => {
    const darkMode = useDarkMode()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { loading, users } = useSelector(state => state.user)
    const user = users?.find(us => us.id === id)
    useEffect(() => {
        users.length === 0 && dispatch(getUsers())
    }, [dispatch, id, users])
    console.log(user);
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <Box sx={{ p: '100px 0', height: '100vh' }}>
                <ShowItem loading={loading} file={user?.file}>
                    <ReadField label='Name' name={user?.name} />
                    <ReadField label='Email' name={user?.email} />
                    <ReadField label='Address' name={user?.address} />
                    <ReadField label='Phone' name={user?.phone} />
                    <ReadField label='BirthDate' name={user?.birthDate} />
                </ShowItem>
            </Box>
        </HomePage>
    )
}

export default ShowUser