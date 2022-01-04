import React from 'react'
import dynamic from 'next/dynamic';

// import { ResponsiveContainer } from 'recharts';
// import PriceChart from '../../components/PriceChart';

const CoinMarket = dynamic(() => import('../../components/CoinMarket'));
const PriceChange = dynamic(() => import('../../components/PriceChange'));
const SocialMarket = dynamic(() => import('../../components/SocialMarket'));
const CoinDetail = dynamic(() => import('../../components/CoinDetail'));

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

    return (
        <div className="p-4 min-h-[calc(100vh-112px)] bg-light-blue">
            <CoinDetail 
                coin={coin}
            />

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
