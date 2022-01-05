import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { currencyState } from '../atoms/currencyAtom'
import PriceChart from './PriceChart'

const CoinRow = ({ coin, index }) => {
    const currencyId = useRecoilValue(currencyState);

    const priceShort = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    const priceLong = {
        maximumFractionDigits: 5, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    return (
        <Link href={`/coin/${coin.id}`}>
            <a className="grid gap-2 md:gap-4 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center mt-0 px-2 sm:px-3 h-12 md:h-16 hover:bg-slate-100 transition-all hover:shadow-md cursor-pointer border-b-[1px] border-gray-300">
                <span>{index + 1}.</span>
                <span className="flex gap-2 items-center">
                    <Image
                        height={25}
                        width={25}
                        objectFit='contain'
                        src={coin.image}
                        alt={coin.name}
                    />
                    <h2 className="font-semibold">{coin.name}</h2>
                </span>
                <small className="hidden md:inline-block uppercase">
                    {coin.symbol}
                </small>
                <span>
                    {(coin.current_price * 1).toLocaleString('en-IN', priceLong)}
                </span>
                <span className="hidden md:inline-block">
                    {(coin.market_cap * 1).toLocaleString('en-IN', priceShort)}
                </span>
                <span className={`${coin.price_change_percentage_1h_in_currency > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.round(coin.price_change_percentage_1h_in_currency * 10) / 10}%
                </span>
                <span className={`${coin.price_change_percentage_24h_in_currency > 0 ? 'text-green-600' : 'text-red-600'} hidden md:inline-block`}>
                    {Math.round(coin.price_change_percentage_24h_in_currency * 10) / 10}%
                </span>
                <span className={`${coin.price_change_percentage_7d_in_currency > 0 ? 'text-green-600' : 'text-red-600'} hidden md:inline-block`}>
                    {Math.round(coin.price_change_percentage_7d_in_currency * 10) / 10}%
                </span>
                <span className="hidden md:inline-block">
                    <PriceChart 
                        sparkline={coin.sparkline_in_7d?.price}
                        graphColor={coin.price_change_percentage_7d_in_currency}
                        GraphWidth={250}
                        GraphHeight={56}
                    />
                </span>
            </a>
        </Link>
    )
}

export default CoinRow
