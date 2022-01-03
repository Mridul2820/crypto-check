import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';

const PriceChart = ({ sparkline, graphColor, GraphWidth, GraphHeight }) => {
    const baseValue = Math.min(sparkline)

    let sparklineObj = []

    for(let i = 0; i <= sparkline.length; i++){
        sparklineObj.push({Price: sparkline[i]})
    }

    return (
        <LineChart width={GraphWidth} height={GraphHeight} data={sparklineObj}>
            <Tooltip />
            <Line 
                type="monotone" 
                dataKey="Price" 
                stroke={`${graphColor > 0 ? '#16A34A' : '#DC2626'}`}
                baseValue={baseValue}
                strokeWidth={1}
                dot={false} 
            />
        </LineChart>
    )
}

export default PriceChart
