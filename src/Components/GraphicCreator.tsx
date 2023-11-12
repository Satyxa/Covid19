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
import {periodStatic} from "../types";

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

export const drawGraphic = (periods: periodStatic[]) => {
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
    const filteredPeriods = periods.filter(el => el.cases !== 0 || el.deaths !== 0)
filteredPeriods.reverse()
    filteredPeriods.unshift({
        cases: 0,
        deaths: 0,
        startDate: '00/00/00'
    })

    const labels = filteredPeriods.map(per => per.startDate)
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Случаи',
                data: filteredPeriods.map((data) => data.cases),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                fill: true,
                label: 'Смерти',
                data: filteredPeriods.map((data) => data.deaths),
                borderColor: 'rgb(238,224,79)',
                backgroundColor: 'rgb(245,237,153)',
            },
        ],
    }

    return {options, data}
}
interface AreaChartProps {
    periods: periodStatic[]
}
export const AreaChart: FC<AreaChartProps> = ({periods}:AreaChartProps) => {
    const {options, data} = drawGraphic(periods.reverse())
    return (<Line options={options} data={data} />)
}
