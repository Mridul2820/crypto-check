import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';
// import { ResponsiveContainer } from 'recharts';
// import PriceChart from '../../components/PriceChart';

const CoinMarket = dynamic(() => import('../../components/CoinMarket'));
const PriceChange = dynamic(() => import('../../components/PriceChange'));
const SocialMarket = dynamic(() => import('../../components/SocialMarket'));


export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true&tickers=false&developer_data=false`);
  
    const data = await res.json();
  
    return {
        props: {
            coin: data
        }
    };
}

const Coin = ({ coin }) => {
    const currencyId = useRecoilValue(currencyState);

    const optionsFull = {
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0,
        style: 'currency',
        currency: currencyId.toUpperCase()
    }

    return (
        <div className="p-4">
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

            <PriceChange 
                market={coin.market_data}
            />

            <div className="flex gap-8 flex-col md:flex-row max-w-[1000px] mx-auto mt-8">
                <CoinMarket 
                    coinName={coin.name}
                    coinDate={coin.genesis_date}
                    coinMarket={coin.market_data}
                />

                <SocialMarket 
                    coinName={coin.name}
                    Links={coin.links}
                />
            </div>

            {/* <ResponsiveContainer width="100%" height="100%">
                <PriceChart 
                    sparkline={coin.market_data?.sparkline_7d?.price}
                    // graphColor={coin.price_change_percentage_7d_in_currency}
                    GraphWidth={800}
                    GraphHeight={300}
                />
            </ResponsiveContainer> */}
        </div>
    )
}

export default Coin
