import { NextSeo } from 'next-seo';
import React from 'react'
import CoinRow from '../components/CoinRow';

const { SITE_URL } = process.env

export const getStaticProps = async () => {
    const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&price_change_percentage=1h,24h,7d&sparkline=true'
    );
  
    const filteredCoins = await res.json();
  
    return {
        props: {
            filteredCoins
        },
        revalidate: 60
    };
};

const index = ({ filteredCoins }) => {
    const SEO = {
        canonical: SITE_URL
    };

    return (
        <div className="px-5 flex flex-col pb-4 min-h-[50vh] shadow-lg relative pt-24">
            <NextSeo {...SEO} />

            <div className="absolute top-0 left-5 right-5 h-80 overflow-x-hidden z-10">
                <h1 className='font-bold text-3xl text-center mt-5'>Crypto Check</h1>
                <img 
                    src="./assets/bitcoin-big.svg"
                    alt="logo" 
                    className='absolute top-4 left-5 w-20 hover:scale-105 transition-all duration-500 ease-out'
                />
                <img 
                    src="./assets/ethereum-bubble.svg"
                    alt="logo" 
                    className='absolute top-4 -right-16 w-72 hover:scale-105 transition-all duration-500 ease-out'
                />
            </div>

            <div className="shadow-bs1 mb-5 z-20">
                <div className="grid gap-2 md:gap-4 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center sticky top-0 px-2 sm:px-3 py-4 text-gray-700 border-b-[1px] border-gray-600 bg-slate-50 z-40">
                    <span className="">#</span>
                    <span className="">Name</span>
                    <span className="">Code</span>
                    <span className="">Price</span>
                    <span className="hidden md:block">Market Cap</span>
                    <span className="hidden md:block">1H</span>
                    <span className="hidden md:block">24H</span>
                    <span className="hidden md:block">7D</span>
                    <span className="hidden md:block">Last 7 Days</span>
                </div>

                <div className="bg-white z-30">
                    {filteredCoins?.map((coin, index) => (
                        <CoinRow 
                            key={coin.id}
                            coin={coin}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index
