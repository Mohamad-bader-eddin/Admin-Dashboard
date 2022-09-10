import React from 'react'
import { useParams } from 'react-router-dom'
import AddUserForm from '../../Container/AddUserForm/AddUserForm'
import { useDarkMode } from '../../Context/DarkMode'
import { HomePage } from '../Home/Home.style'

const UpdateUser = () => {
    const darkMode = useDarkMode()
    const { id } = useParams()
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <AddUserForm id={id} />
        </HomePage>
    )
}

export default UpdateUser