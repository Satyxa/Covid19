import React, {FC, useEffect} from 'react';
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
import moment from "moment";
import {monthStaticType, periodStatic} from "../types";

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

export const drawGraphic = (periods: monthStaticType[]) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const filteredPeriods = periods.filter(el => el.cases > 0 || el.deaths > 0)

    filteredPeriods.unshift({
        cases: 0,
        deaths: 0,
        month: '00/00/00'
    })

    const labels = filteredPeriods.map(per => per.month)
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Случаи',
                data: filteredPeriods.map((data) => data.cases),
                borderColor: 'rgb(34,108,95)',
                backgroundColor: 'rgba(109,34,34,0.1)',
            },
            {
                fill: true,
                label: 'Смерти',
                data: filteredPeriods.map((data) => data.deaths),
                borderColor: 'rgb(109,34,34)',
                backgroundColor: 'rgba(109,34,34,0.11)',
            },
        ],
    }

    return {options, data}
}
interface AreaChartProps {
    periods: monthStaticType[]
}
export const AreaChart: FC<AreaChartProps> = ({periods}:AreaChartProps) => {
    const {options, data} = drawGraphic(periods.reverse())
    return (<Line options={options} data={data} />)
}
