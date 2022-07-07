import React from 'react'
import {
    CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";
import { colors } from '../../../../shared';
import { getActualDate } from '../../../../shared/helpers';
import { IDailySummary } from '../../../../shared/models';
import { ChartContainer } from './ChartStats.styles'

interface Props{
    dailySummary: IDailySummary[]
}

export const DailyStats = ({dailySummary}:Props) => {

    const actualMonth = getActualDate('MMMM');
    
    return (
        <ChartContainer>

            <h2>Daily Summary - {actualMonth}</h2>

            <ResponsiveContainer
                height={300}
            >
                <LineChart
                    data={dailySummary}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="quantity"
                        stroke={colors.orange}
                        activeDot={{ r: 8 }}
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>

        </ChartContainer>
    )
}
