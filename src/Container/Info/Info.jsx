import React from 'react'
import Activity from '../../Components/Activity/Activity'
import Contact from '../../Components/Contact/Contact'
import Report from '../../Components/Report/Report'
import { Information } from './Info.style'

const Info = () => {
    return (
        <Information>
            <Report />
            <Contact />
            <Activity />
        </Information>
    )
}

export default Info