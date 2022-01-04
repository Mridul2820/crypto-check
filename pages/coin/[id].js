import React from 'react'
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

// import { ResponsiveContainer } from 'recharts';
// import PriceChart from '../../components/PriceChart';

const CoinMarket = dynamic(() => import('../../components/CoinMarket'));
const PriceChange = dynamic(() => import('../../components/PriceChange'));
const SocialMarket = dynamic(() => import('../../components/SocialMarket'));
const CoinDetail = dynamic(() => import('../../components/CoinDetail'));

const { SITE_URL } = process.env

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
    const SEO = {
        title: `${coin?.name} (${coin.symbol.toUpperCase()}) info, price today, market cap`,
        description: `View ${coin?.name} crypto price and chart, ${coin.symbol.toUpperCase()} market cap, circulating supply, latest news and more.`,
        canonical: `${SITE_URL}/coin/${coin?.id}`,

        openGraph: {
            title: `${coin?.name} (${coin.symbol.toUpperCase()}) info, price today, market cap`,
            url: `${SITE_URL}/coin/${coin?.id}`,
            description: `View ${coin?.name} crypto price and chart, ${coin.symbol.toUpperCase()} market cap, circulating supply, latest news and more.`,
            images: [
                {
                    url: coin?.image?.large,
                    width: 300,
                    height: 300,
                    alt: coin?.name
                }
            ],
        }
    };

    return (
        <div className="p-4 min-h-[calc(100vh-112px)] bg-light-blue">
            <NextSeo {...SEO} />

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
