import React from 'react'
import Paper from '../Paper/Paper'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

function createData(id, name, amount) {
    return { id, name, amount };
}

const rows = [
    createData(2356, 'dummy text', 6200),
    createData(4589, 'Lorem Ipsum', 6500),
    createData(3269, 'specimen book', 6800),
    createData(5126, 'Letraset sheets', 7200),
    createData(7425, 'PageMaker', 5900),
];

const Cell = ({ children }) => {
    return <TableCell align="center" sx={{ color: '#777', border: '1px solid #ccc' }}>
        {children}
    </TableCell>
}

const Report = () => {
    const { t } = useTranslation()
    return (
        <Box>
            <Paper height='368px'>
                <Stack direction='row' justifyContent='space-between' sx={{ p: '15px 10px', m: '5px 0' }}>
                    <h4>{new Date().getMonth()} / {new Date().getFullYear()} {t('Report')}</h4>
                    <h3 style={{ color: '#ff4a43', fontWeight: 'bold' }}>21000$</h3>
                </Stack>
                <TableContainer component='div'>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <Cell>{t('ID')}</Cell>
                                <Cell>{t('NAME')}</Cell>
                                <Cell>{t('AMOUNT')}</Cell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}

                                >
                                    <Cell component="th" scope="row">
                                        {row.id}
                                    </Cell>
                                    <Cell>{row.name}</Cell>
                                    <Cell>{row.amount}</Cell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default Report