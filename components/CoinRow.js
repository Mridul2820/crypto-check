import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoinRow = ({ coin, index }) => {

    const optionsFull = {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    }

    const optionsSingle = {
        maximumFractionDigits: 10,
        style: 'currency',
        currency: 'INR'
    }

    return (
        <Link href={`/coin/${coin.id}`}>
            <a className="grid gap-2 md:gap-4 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center px-0 sm:px-3 h-14 hover:bg-slate-100 hover:scale-105 transition-all hover:shadow-md rounded-md cursor-pointer">
                <span>{index + 1}</span>
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
                <span>{coin.symbol}</span>
                <span>
                    {coin.current_price.toLocaleString('en-IN', optionsSingle)}
                </span>
                <span className="hidden md:block">
                    {coin.market_cap.toLocaleString('en-IN', optionsFull)}
                </span>
                <span className="hidden md:block"></span>
            </a>
        </Link>
    )
}

export default CoinRow
