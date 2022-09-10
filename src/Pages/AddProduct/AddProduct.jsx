import React from 'react'
import AddProductForm from '../../Container/AddProductForm/AddProductForm'
import { useDarkMode } from '../../Context/DarkMode'
import { HomePage } from '../Home/Home.style'

const AddProduct = () => {
    const darkMode = useDarkMode()
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <AddProductForm />
        </HomePage>
    )
}

export default AddProduct