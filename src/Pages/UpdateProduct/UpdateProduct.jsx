import React from 'react'
import { useParams } from 'react-router-dom'
import AddProductForm from '../../Container/AddProductForm/AddProductForm'
import { useDarkMode } from '../../Context/DarkMode'
import { HomePage } from '../Home/Home.style'

const UpdateProduct = () => {
    const darkMode = useDarkMode()
    const { id } = useParams()
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <AddProductForm id={id} />
        </HomePage>
    )
}

export default UpdateProduct