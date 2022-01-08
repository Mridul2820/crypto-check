import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useRecoilValue } from 'recoil';
import { currencyState } from '../../atoms/currencyAtom';

const CoinMarket = dynamic(() => import('../../components/detail/CoinMarket'));
const PriceChange = dynamic(() => import('../../components/detail/PriceChange'));
const SocialMarket = dynamic(() => import('../../components/detail/SocialMarket'));
const CoinDetail = dynamic(() => import('../../components/detail/CoinDetail'));
const PriceChartFull = dynamic(() => import('../../components/detail/PriceChartFull'));
const CoinDescription = dynamic(() => import('../../components/detail/CoinDescription'));

import Loader from '../../components/widget/Loader';

const { SITE_URL } = process.env
// const { THEGUARDIAN_API_KEY } = process.env

const Coin = () => {
    const router = useRouter()
    const { id } = router.query

    const [coin, setCoin] = useState([])
    const [price, setPrice] = useState([])
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const currencyId = useRecoilValue(currencyState);

    const getCoinData = async() => {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&developer_data=false&community_data=false&localization=false`
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

    // const getNewsData = async() => {
    //     const { data } = await axios.get(
    //         `https://content.guardianapis.com/search?q=${id}&order-by=newest&page=1&page-size=6&api-key=${THEGUARDIAN_API_KEY}`
    //     );

    //     setNews(data)
    // }

    useEffect(() => {
        if(!router.isReady) return;
        // getNewsData()
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

            {price?.prices &&
            <div className="flex flex-col justify-center items-center mt-8 shadow-bs2 w-full max-w-[1000px] mx-auto rounded-md bg-white p-3 select-none">
                <p className='font-semibold text-lg mb-5 text-center'>
                    {coin.name} price in last 7 days
                </p>
                <div className="w-full h-52 md:h-80">
                    <PriceChartFull 
                        prices={price?.prices}
                    />
                </div>
            </div>
            }

            {coin.description.en &&
                <CoinDescription 
                    name={coin.name}
                    description={coin.description.en}
                />
            }
        </div>
    )
}

export default Coin
