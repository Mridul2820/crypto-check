import React from 'react'
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { currencyState } from '../atoms/currencyAtom';

const CoinDetail = ({ coin }) => {
    const currencyId = useRecoilValue(currencyState);

    const optionsFull = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    return (
        <>
            <div className="flex items-center gap-x-3 justify-center">
                <Image 
                    src={coin.image.large}
                    alt={coin.name}
                    height={36}
                    width={36}
                    objectFit='contain'
                    priority="true"
                />
                <h1 className='text-3xl font-bold'>{coin.name}</h1>
                <p className='uppercase text-xl font-bold'>({coin.symbol})</p>
                <p className='text-xl text-slate-400'>#{coin.market_cap_rank}</p>
            </div>
            <div className="mt-3">
                <h2 className='text-2xl font-bold text-center'>
                    Current Price: {' '}
                    {(coin.market_data.current_price[currencyId] * 1).toLocaleString('en-IN', optionsFull)}
                </h2>
            </div>
        </>
    )
}

export default CoinDetail
