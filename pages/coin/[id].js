import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/router';
import { currencyState } from '../../atoms/currencyAtom';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import Loader from '../../components/Loader';

const CoinMarket = dynamic(() => import('../../components/CoinMarket'));
const PriceChange = dynamic(() => import('../../components/PriceChange'));
const SocialMarket = dynamic(() => import('../../components/SocialMarket'));
const CoinDetail = dynamic(() => import('../../components/CoinDetail'));
const PriceChartFull = dynamic(() => import('../../components/PriceChartFull'));

const { SITE_URL } = process.env

const Coin = () => {
    const router = useRouter()
    const { id } = router.query

    const [coin, setCoin] = useState([])
    const [price, setPrice] = useState([])
    const [loading, setLoading] = useState(true)
    const currencyId = useRecoilValue(currencyState);

    const getCoinData = async() => {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&developer_data=false`
        );
        setCoin(data)
        setLoading(false)
    }

    const getPriceData = async() => {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currencyId}&days=7`
        );
        setPrice(data)
    }

    useEffect(() => {
        if(!router.isReady) return;
        getCoinData()
        const interval = setInterval(() => {
            getCoinData()
        }, 60000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [router.isReady]);

    useEffect(() => {
        if(!router.isReady) return;
        getPriceData()
        const interval = setInterval(() => {
            getPriceData()
        }, 60000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [currencyId, router.isReady]);

    const SEO = {
        title: `${coin?.name} (${coin?.symbol?.toUpperCase()}) info, price today, market cap`,
        description: `View ${coin?.name} crypto price and chart, ${coin?.symbol?.toUpperCase()} market cap, circulating supply, latest news and more.`,
        canonical: `${SITE_URL}/coin/${coin?.id}`,

        openGraph: {
            title: `${coin?.name} (${coin?.symbol?.toUpperCase()}) info, price today, market cap`,
            url: `${SITE_URL}/coin/${coin?.id}`,
            description: `View ${coin?.name} crypto price and chart, ${coin?.symbol?.toUpperCase()} market cap, circulating supply, latest news and more.`,
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

    if(loading) return <Loader />

    return (
        <div className="p-4 min-h-[calc(100vh-112px)] bg-light-blue mb-5">
            <NextSeo {...SEO} />

            <CoinDetail 
                coin={coin}
            />

            <PriceChange 
                market={coin.market_data}
            />

            <div className="flex gap-y-4 gap-x-8 flex-col md:flex-row max-w-[1000px] mx-auto mt-8">
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

            <div className="mt-8 shadow-bs2 max-w-[1000px] mx-auto rounded-md bg-white p-3 select-none">
                <p className='font-semibold text-lg mb-5 text-center'>{coin.name} price in last 7 days</p>
                <ResponsiveContainer width="100%" height="100%" className="flex justify-center">
                    <PriceChartFull 
                        prices={price?.prices}
                        GraphWidth={800}
                        GraphHeight={350}
                    />
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Coin
