import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PriceChart from './PriceChart'

const CoinRow = ({ coin, index }) => {

    const optionsFull = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    }

    const optionsSingle = {
        maximumFractionDigits: 4, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    }

    return (
        <Link href={`/coin/${coin.id}`}>
            <a className="grid gap-2 md:gap-4 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center mt-0 px-0 sm:px-3 h-12 md:h-16 hover:bg-slate-100 transition-all hover:shadow-md cursor-pointer border-b-[1px] border-gray-300">
                <span>{index + 1}.</span>
                <span className="flex gap-2 items-center">
                    <Image
                        height={25}
                        width={25}
                        objectFit='contain'
                        src={coin.image}
                        alt={coin.name}
                    />
                    <h2>{coin.name}</h2>
                </span>
                <small className="hidden md:inline-block uppercase">
                    {coin.symbol}
                </small>
                <span>
                    {(coin.current_price * 1).toLocaleString('en-IN', optionsSingle)}
                </span>
                <span className="hidden md:inline-block">
                    {(coin.market_cap * 1).toLocaleString('en-IN', optionsFull)}
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
                        sparklin={coin.sparkline_in_7d?.price}
                        graphColor={coin.price_change_percentage_7d_in_currency}
                    />
                </span>
            </a>
        </Link>
    )
}

export default CoinRow
