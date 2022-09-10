import React from 'react'
import AddUserForm from '../../Container/AddUserForm/AddUserForm'
import { useDarkMode } from '../../Context/DarkMode'
import { HomePage } from '../Home/Home.style'

const AddUser = () => {
    const darkMode = useDarkMode()

    return (
        <HomePage darkMode={darkMode.darkMode}>
            <AddUserForm />
        </HomePage>
    )
}

export default AddUser