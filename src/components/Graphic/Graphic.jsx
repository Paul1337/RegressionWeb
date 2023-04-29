import React from 'react';
import { Bubble, Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    BubbleController,
    CategoryScale,
    LineController,
    ScatterController,
} from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(
    ScatterController,
    BubbleController,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title
);

const GraphOptions = {
    scales: {
        x: {
            type: 'linear',
        },
        y: {
            type: 'linear',
        },
    },
};

const Graphic = () => {
    const chartData = useSelector((state) => {
        const salaries = state.data.map((man) => man.salary);
        return {
            datasets: [
                {
                    type: 'line',
                    data: [Math.min(...salaries), Math.max(...salaries)].map((salary) => ({
                        x: salary,
                        y: salary * state.regression.b + state.regression.a,
                    })),
                    borderColor: 'darkblue',
                    elements: {
                        point: {
                            radius: 0,
                        },
                        line: {
                            borderWidth: 3,
                        },
                    },
                },
                {
                    type: 'bubble',
                    data: state.data.map((man) => ({
                        x: man.salary,
                        y: man.creditSum,
                        r: 5,
                    })),
                    backgroundColor: 'rgb(255, 99, 132)',
                },
            ],
        };
    });

    return (
        <div>
            <h1 className='part-heading'>Graphic</h1>
            <Chart data={chartData} options={GraphOptions} />
        </div>
    );
};

export default Graphic;
