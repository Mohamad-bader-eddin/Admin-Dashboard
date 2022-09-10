import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BoxContent, Icon, Left, Precentage, Right } from './Widdget';
import Paper from '../Paper/Paper'
import { useTranslation } from 'react-i18next';

const Widget = ({ item }) => {
    const { t } = useTranslation()
    return (
        <Paper>
            <BoxContent>
                <Left>
                    <h4 className='title'>{t(item.title)}</h4>
                    <h4>{item.amount}</h4>
                    <h4 className='link'>{t(item.link)}</h4>
                </Left>
                <Right>
                    <Precentage posotive={item.posotive}><KeyboardArrowUpIcon /> {item.precentage}</Precentage>
                    <Icon>{item.icon}</Icon>
                </Right>
            </BoxContent>
        </Paper>
    )
}

export default Widget