import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { colors } from '../../../../shared';
import { ChartContainer } from './ChartStats.styles';

const data = [
    {
        name: "January",
        items: 24,
    },
    {
        name: "February",
        items: 13,
    },
    {
        name: "March",
        items: 98,
    },
    {
        name: "April",
        items: 39,
    },
    {
        name: "May",
        items: 48,
    },
    {
        name: "June",
        items: 38,
    },
    {
        name: "July",
        items: 43,
    },
    {
        name: "August",
        items: 43,
    },
    {
        name: "September",
        items: 43,
    },
    {
        name: "October",
        items: 43,
    },
    {
        name: "November",
        items: 43,
    },
    {
        name: "December",
        items: 43,
    },
];

export const MonthlyStats = () => {
    return (
        <ChartContainer>

            <h2>Monthly Summary</h2>

            <ResponsiveContainer
                height={400}
            >
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                    <CartesianGrid stroke="#ccc" />
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="items"
                        stroke={colors.orange}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}
