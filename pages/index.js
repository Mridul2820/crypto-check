import React from 'react'
import CoinRow from '../components/CoinRow';

export const getServerSideProps = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=true'
    );
  
    const filteredCoins = await res.json();
  
    return {
        props: {
            filteredCoins
        }
    };
};

const index = ({ filteredCoins }) => {
    return (
        <div className="px-5 flex flex-col pb-4 space-y-1 min-h-[50vh]">
            <div className="grid gap-4 grid-cols-gridcoinsm md:grid-cols-gridcoin items-center sticky z-10 top-0 px-0 sm:px-3  py-4 text-gray-700 border-b-[1px] border-gray-600 tracking-wider bg-slate-50">
                <span className="">#</span>
                <span className="">Name</span>
                <span className="">Code</span>
                <span className="">Price</span>
                <span className="">Market Cap</span>
                <span className="">Last 7 Days</span>
            </div>

            {filteredCoins?.map((coin, index) => (
                <CoinRow 
                    key={coin.id}
                    coin={coin}
                    index={index}
                />
            ))}
        </div>
    )
}

export default index
