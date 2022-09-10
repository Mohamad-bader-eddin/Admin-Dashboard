import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '../../Components/Paper/Paper';
import { TransactionData } from './TransactionData';
import { Transactions } from './Transaction.style';
import { useMuMediaQuery } from '../../Context/MuMediaQuery';
import { useTranslation } from 'react-i18next';


const Cell = ({ children }) => {
    return <TableCell align="center" sx={{ color: '#777', p: '10px' }}>
        {children}
    </TableCell>
}

const Transaction = () => {
    const media = useMuMediaQuery()
    const { t } = useTranslation()
    return (
        <Transactions>
            <TableContainer component={Paper} className='table'>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                media.mobileS ? <></>
                                    : media.mobileL ? <>
                                        <Cell>{t('Tracking_ID')}</Cell>
                                        <Cell>{t('Product')}</Cell>
                                    </>
                                        : media.tablet ? <>
                                            <Cell>{t('Tracking_ID')}</Cell>
                                            <Cell>{t('Product')}</Cell>
                                            <Cell>{t('Customer')}</Cell>
                                        </>
                                            : media.laptop ? <>
                                                <Cell>{t('Tracking_ID')}</Cell>
                                                <Cell>{t('Product')}</Cell>
                                                <Cell>{t('Customer')}</Cell>
                                                <Cell>{t('Amount')}</Cell>
                                                <Cell>{t('Status')}</Cell>
                                            </>
                                                : <>
                                                    <Cell>{t('Tracking_ID')}</Cell>
                                                    <Cell>{t('Product')}</Cell>
                                                    <Cell>{t('Customer')}</Cell>
                                                    <Cell>{t('Amount')}</Cell>
                                                    <Cell>{t('Payment_Method')}</Cell>
                                                    <Cell>{t('Status')}</Cell>
                                                </>
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {media.mobileS ? <></>
                            : media.mobileL ? TransactionData.map((row) => (
                                <TableRow
                                    key={row.id}
                                >
                                    <Cell>{row.id}</Cell>
                                    <Cell>
                                        <div className="cellWrapper">
                                            <img src={row.img} alt="" className="image" />
                                            {row.product}
                                        </div>
                                    </Cell>
                                </TableRow>
                            ))
                                : media.tablet ? TransactionData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        <Cell>{row.id}</Cell>
                                        <Cell>
                                            <div className="cellWrapper">
                                                <img src={row.img} alt="" className="image" />
                                                {row.product}
                                            </div>
                                        </Cell>
                                        <Cell>{row.customer}</Cell>
                                    </TableRow>
                                )) : media.laptop ? TransactionData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                    >
                                        <Cell>{row.id}</Cell>
                                        <Cell>
                                            <div className="cellWrapper">
                                                <img src={row.img} alt="" className="image" />
                                                {row.product}
                                            </div>
                                        </Cell>
                                        <Cell>{row.customer}</Cell>
                                        <Cell>{row.amount}</Cell>
                                        <Cell>
                                            <span className={`status ${row.status}`}>{row.status}</span>
                                        </Cell>
                                    </TableRow>
                                ))
                                    : TransactionData.map((row) => (
                                        <TableRow
                                            key={row.id}
                                        >
                                            <Cell>{row.id}</Cell>
                                            <Cell>
                                                <div className="cellWrapper">
                                                    <img src={row.img} alt="" className="image" />
                                                    {row.product}
                                                </div>
                                            </Cell>
                                            <Cell>{row.customer}</Cell>
                                            <Cell>{row.amount}</Cell>
                                            <Cell>{row.method}</Cell>
                                            <Cell>
                                                <span className={`status ${row.status}`}>{row.status}</span>
                                            </Cell>
                                        </TableRow>
                                    ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Transactions>
    )
}

export default Transaction