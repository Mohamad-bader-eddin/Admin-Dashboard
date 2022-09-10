import React from 'react'
import { useDarkMode } from '../../Context/DarkMode'
import { HomePage } from './Home.style'
import Widgets from '../../Container/Widgets/Widgets'
import Analy from '../../Container/Analy/Analy'
import Info from '../../Container/Info/Info'
import Transaction from '../../Container/Transaction/Transaction'

const Home = () => {
    const darkMode = useDarkMode()
    return (
        <HomePage darkMode={darkMode.darkMode}>
            <Widgets />
            <Analy />
            <Info />
            <Transaction />
        </HomePage>
    )
}

export default Home