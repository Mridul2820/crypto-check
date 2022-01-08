import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';

const PriceChartFull = ({ prices }) => {
    const currencyId = useRecoilValue(currencyState);

    const priceLong = {
        maximumFractionDigits: 5, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    const priceShort = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
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

    let priceObj = prices?.map(function(item) { 
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
        let roundVal = value > 0 ? value.toLocaleString('en-IN', priceShort) : value.toLocaleString('en-IN', priceLong)

        return roundVal
    }

    const tickDate = value => {
        const roundVal = new Date(value).toLocaleDateString("en-US", dateShort);

        return roundVal
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={800} height={300} data={priceObj}>
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
                    dot={false} 
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default PriceChartFull
