import React from 'react'
import { getHostName } from '../utils/getHostName'

const SocialMarket = ({ Links, coinName }) => {
    console.log(Links);
    return (
        <div className='w-[100%] md:w-[50%]'>
            <p className='mb-2 text-xl font-semibold'>Social Info of {coinName}</p>
            {Links.homepage.length > 0 && 
                <div className='flex justify-between py-1 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Website:</span>
                    <div className="flex gap-5 flex-wrap">
                    {Links.homepage.map((site, id) => (
                        <React.Fragment key={id}>
                        {site && 
                            <a 
                                href={site}
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                            >
                                {getHostName(site)}
                            </a>
                        }
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            }

            {Links.blockchain_site.length > 0 && 
                <div className='flex gap-3 justify-between py-1 border-b-[1px] border-slate-300'>
                    <span className='text-slate-700'>Explorers:</span>
                    <div className="flex gap-x-3 gap-y-2 justify-end flex-wrap">
                    {Links.blockchain_site.map((site, id) => (
                        <React.Fragment key={id}>
                        {site && 
                            <a 
                                href={site}
                                target='_blank'
                                rel='noreferrer'
                                className='font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                            >
                                {getHostName(site)}
                            </a>
                        }
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default SocialMarket
