import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const CoinDescription = ({ name, description }) => {
    return (
        <div className='mt-10 shadow-bs2 max-w-[1000px] mx-auto rounded-md bg-white p-5'>
            <h3 className='font-bold text-2xl mb-4'>What is {name}?</h3>
            <ReactMarkdown 
                rehypePlugins={[rehypeRaw]} 
                // eslint-disable-next-line
                children={description} 
                className='prose max-w-full text-base'
            />
        </div>
    )
}

export default CoinDescription
