import Image from 'next/image'
import React from 'react'

const CoinRow = ({ coin, index }) => {
    return (
        <div className="grid gap-5 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center px-0 sm:px-3 h-14 hover:bg-slate-100 rounded-md cursor-auto">
            <span>{index + 1}</span>
            <span className="flex gap-2 items-center">
                <Image
                    height={25}
                    width={25}
                    objectFit='cover'
                    src={coin.image}
                    alt={coin.name}
                />
                <h2>{coin.name}</h2>
            </span>
            <span>{coin.symbol}</span>
            <span>&#8377;{coin.current_price}</span>
            <span>&#8377;{coin.market_cap}</span>
        </div>
    )
}

export default CoinRow
