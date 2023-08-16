import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';

import { VictoryPie } from "victory";


const pieData = [
  { x: "Cats", y: 46 },
  { x: "Dogs", y: 39 },
  { x: "Birds", y: 19 },
  { x: "Fish", y: 19 },

]
export const PieGraph = () => {
  return <VictoryPie
    startAngle={90}
    endAngle={360 + 90}
    data={pieData}
    innerRadius={50}
    radius={arg => 50 + arg.datum.y * 2.5}
    labels={() => null}
    colorScale={
      ['rgba(0, 166, 166, 1)',
        'rgba(9, 10, 13, 1)',
        'rgba(193, 92, 193, 1)',
        'rgba(229, 229, 103, 1)']}
  />;
}