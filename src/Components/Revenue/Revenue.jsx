import React from 'react'
import RevenueDropdowm from '../RevenueDropdowm/RevenueDropdowm';
import { Body, Footer, Header, Item, Rev } from './Revenue.style';
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import Paper from '../Paper/Paper'
import { useTranslation } from 'react-i18next';

const Revenue = () => {
    const { t } = useTranslation()
    return (
        <Rev>
            <Paper>
                <Header>
                    <h4>{t('Total_Revenue')}</h4>
                    <RevenueDropdowm />
                </Header>
                <Body>
                    <CircularProgressbar value={75} text={'75%'} strokeWidth={5} className='chart' />
                    <h5>{t('Total_sales_made_today')}</h5>
                    <h4>420$</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas veniam quo</p>
                </Body>
                <Footer>
                    <Item positive={true}>
                        <h4>{t('Target')}</h4>
                        <div className="itemResult">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </Item>
                    <Item positive={false}>
                        <h4>{t('Last_week')}</h4>
                        <div className="itemResult">
                            <KeyboardArrowDownIcon fontSize='small' />
                            <div className="resultAmount">$1.2k</div>
                        </div>
                    </Item>
                    <Item positive={true}>
                        <h4>{t('Last_month')}</h4>
                        <div className="itemResult">
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className="resultAmount">$11.4k</div>
                        </div>
                    </Item>
                </Footer>
            </Paper>
        </Rev>
    )
}

export default Revenue