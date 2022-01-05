import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis } from 'recharts';

const PriceChartFull = ({ prices, GraphWidth, GraphHeight }) => {
    const priceLong = {
        maximumFractionDigits: 4, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    }

    const priceShort = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    }

    const dateFull = { 
        weekday: 'short', 
        day: 'numeric',
        month: 'short', 
        year: 'numeric',
        hour: 'numeric',
        minute: "numeric",
        second: "numeric"
    }

    const dateShort = { 
        day: 'numeric',
        month: 'short'
    }

    let priceObj = prices.map(function(item) { 
        return { 
            date: item[0], 
            price: item[1]
        }; 
    });

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip backdrop-blur-sm shadow-sm bg-slate-50 p-2">
                    <p className="intro font-semibold">
                        {`Date : ${new Date(label).toLocaleDateString("en-US", dateFull)}`}
                    </p>

                    <p className="label">
                        {`Price : ${payload[0].value.toLocaleString('en-IN', priceLong)}`}
                    </p>

                </div>
            );
        }
      
        return null;
    };

    const tickPrice = value => {
        const roundVal = value.toLocaleString('en-IN', priceShort)

        return roundVal
    }

    const tickDate = value => {
        const roundVal = new Date(value).toLocaleDateString("en-US", dateShort);

        return roundVal
    }

    return (
        <LineChart width={GraphWidth} height={GraphHeight} data={priceObj}>
            <Tooltip 
                content={<CustomTooltip />}
            />
            <XAxis 
                dataKey="date"
                tickFormatter={tickDate}
                tickSize={4}
            />
            <YAxis 
                domain={["dataMin", 'dataMax']}
                tickFormatter={tickPrice}
                tickSize={2}
                padding={{ top: 10, bottom: 10 }}
            />
            <Line 
                type="monotone" 
                dataKey="price"
                stroke="#389fff"
                strokeWidth={1}
                dot={true} 
            />
        </LineChart>
    )
}

export default PriceChartFull
