import React from 'react'
import { getHostName } from '../utils/getHostName'
import { BsDiscord, BsFacebook, BsGithub, BsReddit, BsTelegram, BsTwitter } from 'react-icons/bs'
import { IoLogoBitbucket } from 'react-icons/io5'

const SocialMarket = ({ Links, coinName }) => {
    return (
        <div className='w-[100%] md:w-[50%] shadow-bs2 p-4 bg-white rounded-md'>
            <p className='mb-2 text-xl font-semibold'>Social Info of {coinName}</p>
            {Links.homepage.length > 0 && 
                <div className='flex gap-2 justify-between py-1 border-b-[1px] border-slate-300'>
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
                <div className='flex gap-2 justify-between py-1 border-b-[1px] border-slate-300'>
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

            <div className="flex gap-2 justify-between py-1 border-b-[1px] border-slate-300">
                <span className='text-slate-700'>Community:</span>
                <div className="flex gap-x-3 gap-y-2 justify-end flex-wrap">
                    {Links.facebook_username && 
                        <a 
                            href={`https://www.facebook.com/${Links.facebook_username}`}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsFacebook />
                            Facebook
                        </a>
                    }

                    {Links.twitter_screen_name && 
                        <a 
                            href={`https://twitter.com/${Links.twitter_screen_name}`}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsTwitter />
                            Twitter
                        </a>
                    }
                    {Links.subreddit_url && 
                        <a 
                            href={Links.subreddit_url}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsReddit />
                            Reddit
                        </a>
                    }
                    {Links.telegram_channel_identifier && 
                        <a 
                            href={`https://t.me/${Links.telegram_channel_identifier}`}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsTelegram />
                            Telegram
                        </a>
                    }
                    {Links.chat_url && 
                        <a 
                            href={Links.chat_url}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsDiscord />
                            Discord
                        </a>
                    }
                </div>
            </div>

            {(Links.repos_url.github.length > 0 || Links.repos_url.bitbucket.length > 0) && 
            <div className="flex gap-2 justify-between py-1">
                <span className='text-slate-700'>Source Code:</span>
                <div className="flex gap-x-3 gap-y-2 justify-end flex-wrap">
                    {Links.repos_url.github.length > 0 && 
                        <a 
                            href={Links.repos_url.github[0]}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <BsGithub />
                            Github
                        </a>
                    }
                    {Links.repos_url.bitbucket.length > 0 && 
                        <a 
                            href={Links.repos_url.bitbucket[0]}
                            target='_blank'
                            rel='noreferrer' 
                            className='flex justify-center items-center gap-1 font-semibold bg-slate-200 hover:bg-slate-300 hover:shadow-md transition-all duration-75 rounded-md py-1 px-3'
                        >
                            <IoLogoBitbucket />
                            Bitbucket
                        </a>
                    }
                </div>
            </div>
            }
        </div>
    )
}

export default SocialMarket
