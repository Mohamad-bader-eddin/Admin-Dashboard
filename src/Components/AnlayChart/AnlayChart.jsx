import React from 'react'
import { Chart } from './AnlayChart.style'
import { Box, Container } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTranslation } from 'react-i18next';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    maintainAspectRatio: 1.2
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};



const AnlayChart = () => {
    const { t } = useTranslation()
    return (
        <Chart>
            <Box>
                <Container sx={{ p: '10px' }}>
                    <h3>{t('Last_six_month')} ({t('income')})</h3>
                    <Line options={options} data={data} />
                </Container>
            </Box>
        </Chart>
    )
}

export default AnlayChart