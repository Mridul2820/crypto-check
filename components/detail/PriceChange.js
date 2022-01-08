import React from 'react'
import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';

const PriceChange = ({ market }) => {
    const currencyId = useRecoilValue(currencyState);

    const TableCell = 'p-2 text-center border-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer bg-white min-w-[70px]'
    const TableCellBG = 'p-2 text-center border-[1px] bg-slate-200 border-slate-400 select-none uppercase'

    return (
        <div className='mt-6'>
            <p className='mb-2 text-lg font-semibold text-center'>Price Change</p>
            <div className="max-w-fit overflow-x-scroll md:overflow-x-hidden mx-auto shadow-bs2">
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
                            <td className={`${TableCell} ${market.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_24h * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_7d > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_7d * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_14d > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_14d * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_30d > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_30d * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_60d > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_60d * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_200d > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_200d * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1y > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_1y * 10) / 10}%</td>
                        </tr>
                        <tr>
                            <td className={TableCellBG}>In {currencyId}</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1h_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_1h_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_24h_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_24h_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_7d_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_7d_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_14d_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_14d_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_30d_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_30d_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_60d_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_60d_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_200d_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_200d_in_currency[currencyId] * 10) / 10}%</td>
                            <td className={`${TableCell} ${market.price_change_percentage_1y_in_currency[currencyId] > 0 ? 'text-green-600' : 'text-red-600'}`}>{Math.round(market.price_change_percentage_1y_in_currency[currencyId] * 10) / 10}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PriceChange
