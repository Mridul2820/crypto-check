import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';

const PriceChart = ({ sparklin, graphColor }) => {
    const baseValue = Math.min(sparklin)
    console.log(baseValue)
    let sparklinObj = []

    for(let i = 0; i <= sparklin.length; i++){
        sparklinObj.push({Price: sparklin[i]})
    }

    return (
        <LineChart width={250} height={56} data={sparklinObj}>
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
