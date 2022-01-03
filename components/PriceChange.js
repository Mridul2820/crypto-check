import React from 'react'

const PriceChange = ({ market }) => {
    const TableCell = 'p-2 text-left border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer'
    const TableCellBG = 'p-2 text-left border-[1px] bg-slate-200 border-slate-400 select-none'
    return (
        <div className='mt-6'>
            <p className='mb-2 text-lg font-semibold text-center'>Price Chart</p>
            <div className="max-w-fit overflow-x-scroll md:overflow-x-hidden mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th className={TableCellBG}>Duration</th>
                            <th className={TableCellBG}>1H</th>
                            <th className={TableCellBG}>24H</th>
                            <th className={TableCellBG}>7D</th>
                            <th className={TableCellBG}>14D</th>
                            <th className={TableCellBG}>30D</th>
                            <th className={TableCellBG}>60D</th>
                            <th className={TableCellBG}>200D</th>
                            <th className={TableCellBG}>1Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={TableCellBG}>Percentage</td>
                            <td className={`${TableCell}`}>-</td>
                            <td className={`${TableCell} ${market.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_24h}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_7d > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_7d}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_14d > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_14d}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_30d > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_30d}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_60d > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_60d}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_200d > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_200d}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1y > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_1y}</td>
                        </tr>
                        <tr>
                            <td className={TableCellBG}>Currency</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1h_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_1h_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_24h_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_24h_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_7d_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_7d_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_14d_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_14d_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_30d_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_30d_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_60d_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_60d_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_200d_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_200d_in_currency.inr}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1y_in_currency.inr > 0 ? 'text-green-600' : 'text-red-600'}`}>{market.price_change_percentage_1y_in_currency.inr}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceChange
