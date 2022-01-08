import React from 'react'
import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';

const CoinMarket = ({ coinName, coinDate, coinMarket }) => {
    const currencyId = useRecoilValue(currencyState);

    const priceShort = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    return (
        <div className='w-full md:w-[50%] shadow-bs1 p-4 bg-white rounded-md'>
            <p className='mb-2 text-xl font-semibold select-none'>Market Info of {coinName}</p>
            {coinDate && 
                <div className='flex justify-between py-2 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>First Introduced:</span>
                    <span className='font-semibold'>
                        {coinDate}
                    </span>
                </div>
            }
            {coinMarket?.market_cap && 
                <div className='flex justify-between py-2 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Market Cap:</span>
                    <span className='font-semibold'>
                        {(coinMarket?.market_cap[currencyId] * 1).toLocaleString('en-IN', priceShort)}
                    </span>
                </div>
            }
            {coinMarket?.fully_diluted_valuation.length > 1 && 
                <div className='flex justify-between py-2 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Fully Diluted Valuation:</span> 
                    <span className='font-semibold'>
                        {(coinMarket?.fully_diluted_valuation[currencyId] * 1)?.toLocaleString('en-IN', priceShort)}
                    </span>
                </div>
            }
            {coinMarket?.circulating_supply && 
                <div className='flex justify-between py-2 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Circulating Supply:</span> 
                    <span className='font-semibold'>
                        {coinMarket?.circulating_supply?.toLocaleString('en-IN')}
                    </span>
                </div>
            }
            {coinMarket?.total_supply && 
                <div className='flex justify-between py-2 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Total Supply:</span> 
                    <span className='font-semibold'>
                        {coinMarket?.total_supply?.toLocaleString('en-IN')}
                    </span>
                </div>
            }
            {coinMarket?.max_supply && 
                <div className='flex justify-between py-2'>
                    <span className='text-slate-700'>Max Supply: </span>
                    <span className='font-semibold'>
                        {coinMarket?.max_supply?.toLocaleString('en-IN')}
                    </span>
                </div>
            }
        </div>
    )
}

export default CoinMarket
