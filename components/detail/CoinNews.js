import { truncate } from 'lodash'
import Image from 'next/image'
import React from 'react'

const News = ({ news }) => {
    const dateShort = { 
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }

    return (
        <div className='rounded-lg shadow-bs3 hover:shadow-bs1 transition-all duration-300 cursor-pointer overflow-hidden'>
            <a 
                href={news.webUrl}
                target='_blank'
                rel='noreferrer'
            >
                <Image
                    src={news.fields.thumbnail}
                    alt={news.fields.headline}
                    height={200}
                    width={350}
                    objectFit='cover'
                    layout='responsive'
                />
                <div className="px-3 py-4">
                    <h3 className='font-semibold text-lg'>
                        {truncate(news.fields.headline, {'length': 60})}
                    </h3>

                    <small>{new Date(news.webPublicationDate).toLocaleDateString("en-US", dateShort)}</small>
                </div>
            </a>
        </div>
    )
}

const CoinNews = ({ name, newsList }) => {
    console.log(newsList)
    return (
        <div className='mt-10 shadow-bs2 max-w-[1000px] mx-auto rounded-md bg-white p-5'>
            <h3 className='font-bold text-2xl mb-4'>{name} Latest News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {newsList.map(news => (
                    <News
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        </div>
    )
}

export default CoinNews
