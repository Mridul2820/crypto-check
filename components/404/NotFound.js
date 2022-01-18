import React from 'react'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

const NotFound = ({ image, message }) => {
    return (
        <div className='min-h-[calc(100vh-48px)] h-full w-full flex justify-center items-center flex-col gap-12 p-2 md:p-10 lg:p-20'>
            <img 
                src={`/assets/${image}.svg`}
                alt="not found" 
                className='w-full max-w-[500px]'
            />
            <p className='text-center'>{message}</p>
            <Link href='/'>
                <a className="bg-custom-blue flex justify-center items-center gap-2 text-white px-5 py-2 text-lg rounded-lg">
                    <BiArrowBack />Back to home
                </a>
            </Link>
        </div>
    )
}

export default NotFound
