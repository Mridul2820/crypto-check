import React from 'react'
import { LineChart, Line, Tooltip } from 'recharts';

const PriceChart = ({ sparklin }) => {
    let sparklinObj = []

    for(let i = 0; i <= sparklin.length; i++){
        sparklinObj.push({price: sparklin[i]})
    }

    return (
        <LineChart width={250} height={56} data={sparklinObj}>
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={1} dot={false} />
        </LineChart>
    )
}

export default PriceChart
