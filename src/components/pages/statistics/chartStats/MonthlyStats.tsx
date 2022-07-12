import {
    CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis,
    YAxis
} from "recharts";
import { colors } from '../../../../shared';
import { IMonthlySummary } from '../../../../shared/models';
import { ChartContainer } from './ChartStats.styles';

interface Props {
    monthlySummary: IMonthlySummary[]
}

export const MonthlyStats = ({ monthlySummary }: Props) => {

    return (
        <ChartContainer>

            <h2>Monthly Summary</h2>

            <ResponsiveContainer
                height={300}
            >
                <LineChart
                    data={monthlySummary}
                    margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                >
                    {/* <CartesianGrid stroke="#ccc" /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
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
