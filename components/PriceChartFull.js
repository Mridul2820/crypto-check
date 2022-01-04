import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';

const PriceChartFull = ({ sparkline, GraphWidth, GraphHeight }) => {
    const baseValue = Math.min(sparkline)

    let sparklineObj = []

    for(let i = 0; i <= sparkline.length; i++){
        sparklineObj.push({Price: sparkline[i]})
    }

    const tickFormatter = value => {
        const roundVal = Math.round((value * 10) / 10)

        return roundVal
    }

    return (
        <LineChart width={GraphWidth} height={GraphHeight} data={sparklineObj}>
            <Tooltip />
            <XAxis 
                tickCount={7}
            />
            <YAxis 
                domain={["dataMin", 'dataMax']}
                tickFormatter={tickFormatter}
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
