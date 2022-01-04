import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';

const PriceChartFull = ({ sparkline, graphColor, GraphWidth, GraphHeight }) => {
    const baseValue = Math.min(sparkline)

    let sparklineObj = []

    for(let i = 0; i <= sparkline.length; i++){
        sparklineObj.push({Price: Math.round(sparkline[i] * 10) / 10})
    }

    return (
        <LineChart width={GraphWidth} height={GraphHeight} data={sparklineObj}>
            <Tooltip />
            <XAxis />
            <YAxis 
                domain={["dataMin - 200", 'dataMax + 200']}
            />
            <Line 
                type="monotone" 
                dataKey="Price" 
                stroke="#389fff"
                baseValue={baseValue}
                strokeWidth={2}
                dot={false} 
            />
        </LineChart>
    )
}

export default PriceChartFull
